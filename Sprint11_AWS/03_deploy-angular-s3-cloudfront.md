# Deploy an Angular App on S3 + CloudFront (with Spring Boot and NestJS) — AWS Console Guide

This guide uses the AWS web console only (no CLI, no Route 53, no custom domain). Your app will be served from the default CloudFront URL, e.g. `https://d1234abcd.cloudfront.net`.

## 1. How it works

```
Browser ──► CloudFront (https://dxxxx.cloudfront.net)
              │
              ├─ /api/*   ──► Spring Boot  (port 8080)
              ├─ /auth/*  ──► NestJS       (port 3000)
              └─ /*       ──► S3 bucket    (Angular build)
```

The Angular app calls **relative** URLs (`/api/...` and `/auth/...`). CloudFront looks at the path and sends the request to the right place. Since the browser only ever talks to one domain, you don't need CORS in production.

## 2. Prerequisites

- An AWS account
- Spring Boot running on port **8080** and NestJS running on port **3000**, each reachable from the internet through a **public DNS name** (for example an EC2 public DNS like `ec2-1-2-3-4.compute-1.amazonaws.com` or a load balancer DNS name). CloudFront can't use `localhost` or a bare IP address as an origin.
- The EC2/load balancer security group allows inbound traffic on ports **8080** and **3000**.
- Node.js and the Angular CLI on your machine

---

## 3. Prepare the Angular app

### 3.1 Use relative API URLs

`src/environments/environment.prod.ts`
```ts
export const environment = {
  production: true,
  apiUrl: '/api',
  authUrl: '/auth',
};
```

`src/environments/environment.ts` (local development)
```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api',
  authUrl: 'http://localhost:3000/auth',
};
```

Example usage:
```ts
this.http.post(`${environment.authUrl}/login`, credentials);
this.http.get(`${environment.apiUrl}/orders`);
```

### 3.2 Build

```
ng build --configuration production
```

The output is in `dist/<project-name>/browser` (Angular 17+) or `dist/<project-name>` (older versions). You will upload the **contents** of this folder.

---

## 4. Prepare the backends

CloudFront forwards the full path unchanged, so a request for `/api/orders` reaches Spring as `/api/orders`, and `/auth/login` reaches NestJS as `/auth/login`. Make sure each backend expects its prefix.

### Spring Boot (port 8080) — prefix `/api`

`application.properties`
```properties
server.port=8080
server.servlet.context-path=/api
```

### NestJS (port 3000) — prefix `/auth`

`main.ts`
```ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('auth');
  await app.listen(3000);
}
bootstrap();
```

> If your NestJS controllers already start with `auth` (e.g. `@Controller('auth')`), skip `setGlobalPrefix` so you don't end up with `/auth/auth/...`.

Redeploy both backends after the change.

---

## 5. Create the S3 bucket

1. Open the **S3** console and click **Create bucket**.
2. Enter a unique **Bucket name** (e.g. `my-angular-app-prod`) and choose your **Region**.
3. Leave **Block all public access** turned **ON**. The bucket stays private; CloudFront will be the only thing allowed to read it.
4. Click **Create bucket**.

## 6. Upload the Angular build

1. Open your bucket and click **Upload**.
2. Click **Add files** and **Add folder**, and select everything **inside** your `dist/.../browser` folder (`index.html`, the `.js` and `.css` files, `assets`, etc.). `index.html` must end up at the **root** of the bucket, not inside a subfolder.
3. Click **Upload**, then **Close**.

---

## 7. Create the CloudFront distribution

1. Open the **CloudFront** console and click **Create distribution**.
2. Enter a **Distribution name** (e.g. `my-angular-app`) and choose the **Single website or app** option, then click **Next**.
3. **Origin type:** choose **Amazon S3**.
4. **S3 origin:** click **Browse S3** and select your bucket.
5. Select **Allow private S3 bucket access to CloudFront – Recommended**. This sets up Origin Access Control (OAC) for you and updates the bucket policy automatically.
6. Click **Next**. If asked about AWS WAF, choose **Do not enable security protections**, then **Next**.
7. Review and click **Create distribution**.
8. If the console shows a notice that the S3 bucket policy needs to be updated, click **Copy policy**, go to **S3 → your bucket → Permissions → Bucket policy → Edit**, paste it, and **Save changes**.

### 7.1 Set the default root object

1. Open your distribution, **General** tab → **Settings** → **Edit**.
2. Set **Default root object** to `index.html`.
3. Click **Save changes**.

---

## 8. Add the Spring Boot and NestJS origins

On your distribution, open the **Origins** tab and click **Create origin** twice, once for each backend.

**Spring Boot**

| Field | Value |
|---|---|
| Origin domain | Your Spring server's public DNS name (no `http://`, no port) |
| Protocol | **HTTP only** |
| HTTP port | **8080** |
| Name | `spring-api` |

**NestJS**

| Field | Value |
|---|---|
| Origin domain | Your NestJS server's public DNS name (no `http://`, no port) |
| Protocol | **HTTP only** |
| HTTP port | **3000** |
| Name | `nest-auth` |

Click **Create origin** after each one. (Traffic between the browser and CloudFront is still HTTPS; "HTTP only" applies to the CloudFront → server hop.)

---

## 9. Add routing rules (behaviors)

Open the **Behaviors** tab and click **Create behavior** twice.

**Behavior 1 — Spring Boot**

| Field | Value |
|---|---|
| Path pattern | `/api/*` |
| Origin and origin groups | `spring-api` |
| Viewer protocol policy | **Redirect HTTP to HTTPS** |
| Allowed HTTP methods | **GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE** |
| Cache policy | **CachingDisabled** |
| Origin request policy | **AllViewerExceptHostHeader** |

**Behavior 2 — NestJS**

| Field | Value |
|---|---|
| Path pattern | `/auth/*` |
| Origin and origin groups | `nest-auth` |
| Viewer protocol policy | **Redirect HTTP to HTTPS** |
| Allowed HTTP methods | **GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE** |
| Cache policy | **CachingDisabled** |
| Origin request policy | **AllViewerExceptHostHeader** |

Click **Create behavior** after each one. The **Default (\*)** behavior stays pointed at S3 and serves the Angular app.

> `CachingDisabled` makes sure API responses are never cached. `AllViewerExceptHostHeader` forwards headers (including `Authorization`), cookies, and query strings to your backends.

---

## 10. Make Angular routes work on refresh

Without this step, opening or refreshing a URL such as `/dashboard/orders` returns an error, because that file doesn't exist in S3. A small CloudFront Function fixes it and only affects the Angular (default) behavior, so your API responses are untouched.

### 10.1 Create the function

1. In the CloudFront console, open **Functions** in the left menu → **Create function**.
2. Name it `angular-spa-rewrite` and click **Create function**.
3. In the **Development** tab, replace the code with:

```js
function handler(event) {
  var request = event.request;

  // If the path has no file extension, serve the Angular entry point
  if (!request.uri.includes('.')) {
    request.uri = '/index.html';
  }
  return request;
}
```

4. Click **Save changes**, open the **Publish** tab, and click **Publish function**.

### 10.2 Attach it to the default behavior

1. Go to your distribution → **Behaviors** tab.
2. Select the **Default (\*)** behavior → **Edit**.
3. Scroll to **Function associations**. For **Viewer request**, choose **CloudFront Functions** and select `angular-spa-rewrite`.
4. Click **Save changes**.

---

## 11. Test

1. In your distribution's **General** tab, wait until **Last modified** shows a date instead of "Deploying" (a few minutes).
2. Copy the **Distribution domain name** (`dxxxx.cloudfront.net`) and open `https://dxxxx.cloudfront.net` in your browser.
3. Check that:
   - The Angular app loads.
   - Refreshing on a deep link (e.g. `/dashboard`) still works.
   - Login calls to `/auth/...` reach NestJS.
   - Data calls to `/api/...` reach Spring Boot (use the browser's **Network** tab).

---

## 12. Deploying updates

1. Run `ng build --configuration production`.
2. In **S3 → your bucket → Upload**, upload the new build contents, replacing existing files. Delete old, unused files (older hashed `.js`/`.css` files) if you want to keep the bucket tidy.
3. In **CloudFront → your distribution → Invalidations** tab → **Create invalidation**, enter `/*`, and click **Create invalidation**.

The invalidation clears CloudFront's cached copy of `index.html` so users get the new version. It usually completes within a minute or two.

---

## 13. Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| `AccessDenied` XML page | Bucket policy missing or OAC not set up | Re-copy the policy from the origin's settings and apply it in S3 → Permissions |
| Blank page or `Not Found` at the root | `index.html` is in a subfolder, or default root object not set | Upload so `index.html` is at the bucket root; set **Default root object** (step 7.1) |
| Refreshing a route gives an error | SPA function not attached | Complete step 10.2 and make sure it's published |
| `/api/...` returns 404 from the server | Backend doesn't use the `/api` prefix | Set `server.servlet.context-path=/api` in Spring |
| `/auth/...` returns 404 from the server | Backend doesn't use the `/auth` prefix | Use `setGlobalPrefix('auth')` (or `@Controller('auth')`, not both) in NestJS |
| `502` / `504` from CloudFront | CloudFront can't reach the server | Check that the origin uses a public DNS name, the right port (8080/3000), **HTTP only**, and the security group allows inbound on that port |
| `/api/...` returns the Angular page | Behavior path pattern or order is wrong | Confirm `/api/*` and `/auth/*` behaviors exist above the Default (\*) behavior |
| Old version still shows after upload | CloudFront cache | Create an invalidation for `/*` (step 12) |
| Auth header or cookies missing at the backend | Wrong origin request policy | Set **AllViewerExceptHostHeader** on the `/api/*` and `/auth/*` behaviors |
