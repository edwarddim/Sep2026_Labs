# Migrating Docker Containers from EC2 to ECS (Fargate and EC2) — AWS Console Guide

**Scope:** Spring Boot + NestJS containers currently on a single EC2 host, moving to Amazon ECS with images in Amazon ECR and DB settings in SSM Parameter Store. Angular (S3 + CloudFront) and Postgres (RDS) stay as they are.
**Method:** AWS Management Console (GUI) only. The only step that cannot be done purely in the browser is `docker push` (see Section 3).

> Replace placeholders like `myapp`, `prod`, `us-east-1`, `<ACCOUNT_ID>` with your own values.

---

## Agenda

**Foundation (do these first, same for Fargate and EC2)**

0. [Target Architecture](#0-target-architecture) — diagram and Fargate vs ECS-on-EC2 comparison
1. [Prerequisites and Planning](#1-prerequisites-and-planning) — info to gather, networking, security groups
2. [Create Parameters in SSM Parameter Store](#2-create-parameters-in-ssm-parameter-store) — DB connection parameters and env var mapping
3. [Push Images to Amazon ECR](#3-push-images-to-amazon-ecr) — repositories, lifecycle rules, pushing images
4. [IAM Roles](#4-iam-roles) — task execution role, task role, instance role
5. [Shared Resources (Logs and Load Balancer)](#5-shared-resources-logs-and-load-balancer) — log groups, target groups, ALB, CloudFront

**Choose your path**

- **[Part A — ECS on Fargate](#part-a--ecs-on-fargate)**
  6. [Fargate Step-by-Step](#6-fargate-step-by-step) — cluster, task definitions, services, verify, deploy updates
- **[Part B — ECS on EC2 Launch Type](#part-b--ecs-on-ec2-launch-type)**
  7. [ECS on EC2 Step-by-Step](#7-ecs-on-ec2-step-by-step) — cluster with Auto Scaling group, task definitions, services, operations

**Go-live and operations**

8. [Cutover Plan](#8-cutover-plan-zerolow-downtime) — switching traffic, rollback, RDS connection limits
9. [Troubleshooting Table](#9-troubleshooting-table) — common errors and fixes
10. [Cost and Hardening Checklist](#10-cost--hardening-checklist)
11. [Quick Reference — Order of Operations](#11-quick-reference--order-of-operations)

---

## 0. Target Architecture

```
Browser
  │
  ├── Angular static files ──► CloudFront ──► S3                (unchanged)
  │
  └── /api/spring/*, /api/nest/*
        │
   CloudFront (new behavior) or direct DNS
        │
   Application Load Balancer (public subnets)
        ├── Target group: spring-tg ──► ECS service "spring-svc"  (tasks in private subnets)
        └── Target group: nest-tg   ──► ECS service "nest-svc"
                                              │
                                              ▼
                                  RDS PostgreSQL (private)
        ECR (images)    SSM Parameter Store (DB config)    CloudWatch Logs
```

### Fargate vs ECS on EC2 — which one?

| Aspect | ECS + Fargate | ECS + EC2 launch type |
|---|---|---|
| Servers to manage | None | You manage the instances (AMI patching, scaling, disk) |
| Pricing | Per vCPU/GB-second of the task | Per EC2 instance (cheaper if well packed/reserved) |
| Startup of new capacity | ~30–60 s per task | Instant if spare instance capacity exists |
| Best for | Most small/medium workloads, minimal ops | Steady, predictable load; need GPUs, large memory, or cost optimization |
| Complexity in console | Low | Medium (Auto Scaling Group, capacity provider) |

**Recommendation:** start with Fargate. Part B is included in case you need EC2-backed ECS.

---

## 1. Prerequisites and Planning

### 1.1 Gather information about your current setup

Before you click anything, write down:

| Item | Spring | Nest |
|---|---|---|
| Container port | e.g. 8080 | e.g. 3000 |
| Health check path | `/actuator/health` | `/health` (or `/`) |
| CPU / memory actually used | check `docker stats` on the EC2 | same |
| Env vars used (names) | `SPRING_DATASOURCE_*` etc. | `DB_*`, `DATABASE_URL` etc. |
| Image name/tag | | |

Also note: VPC ID, subnet IDs, the RDS security group, and the RDS endpoint.

### 1.2 Network requirements

- A VPC with **at least 2 subnets in different AZs** for the load balancer (public) and **2 for the tasks**.
- **Recommended:** tasks in **private subnets**. They need a path to ECR, CloudWatch Logs, and SSM:
  - **Option 1:** NAT Gateway (simple, ~$32/month + data).
  - **Option 2:** VPC endpoints (Console → VPC → Endpoints): `com.amazonaws.<region>.ecr.api`, `ecr.dkr`, `logs`, `ssm`, plus an **S3 Gateway endpoint** (ECR layers are stored in S3).
- **Quick/cheap alternative (less secure):** put tasks in public subnets and set **Auto-assign public IP = ENABLED**. Security groups still restrict inbound traffic.

### 1.3 Security groups (create now — EC2 Console → Security Groups → Create)

| Name | Inbound rules | Purpose |
|---|---|---|
| `myapp-alb-sg` | TCP 80 and 443 from `0.0.0.0/0` (or CloudFront prefix list `com.amazonaws.global.cloudfront.origin-facing` to lock down) | Load balancer |
| `myapp-ecs-sg` | TCP `8080` from `myapp-alb-sg`; TCP `3000` from `myapp-alb-sg` | Tasks (Fargate or EC2) |
| RDS security group (existing) | **Add rule:** PostgreSQL TCP `5432` source = `myapp-ecs-sg` | Lets tasks reach DB |

> Keep your existing EC2 host's rule on the RDS SG until cutover is complete, then remove it.

---

## 2. Create Parameters in SSM Parameter Store

### 2.1 Naming convention

Use a hierarchy so you can grant IAM access by path:

```
/myapp/prod/db/host
/myapp/prod/db/port
/myapp/prod/db/name
/myapp/prod/db/username
/myapp/prod/db/password        ← SecureString
/myapp/prod/db/jdbc-url        ← optional convenience for Spring
```

If Spring and Nest use different DB users/databases, add a service level: `/myapp/prod/spring/db/...` and `/myapp/prod/nest/db/...`.

### 2.2 Create each parameter (console steps)

1. Console → search **Systems Manager** → left menu **Application Management → Parameter Store**.
2. Make sure the **region** (top right) is the same one where your ECS cluster will run.
3. Click **Create parameter**.
4. Fill in:
   - **Name:** `/myapp/prod/db/host`
   - **Description:** `RDS endpoint for prod`
   - **Tier:** Standard (free, up to 4 KB)
   - **Type:**
     - `String` for host, port, name, username, jdbc-url
     - **`SecureString`** for password
   - **Data type:** `text`
   - **KMS key source** (SecureString only): *My current account* → `alias/aws/ssm` (default AWS-managed key — simplest). Use a customer-managed key only if you need key-level control.
   - **Value:** e.g. `mydb.abc123xyz.us-east-1.rds.amazonaws.com`
5. Click **Create parameter**. Repeat for every parameter.

Example values:

| Name | Type | Value |
|---|---|---|
| `/myapp/prod/db/host` | String | `mydb.abc123.us-east-1.rds.amazonaws.com` |
| `/myapp/prod/db/port` | String | `5432` |
| `/myapp/prod/db/name` | String | `appdb` |
| `/myapp/prod/db/username` | String | `app_user` |
| `/myapp/prod/db/password` | **SecureString** | `••••••••` |
| `/myapp/prod/db/jdbc-url` | String | `jdbc:postgresql://mydb.abc123.us-east-1.rds.amazonaws.com:5432/appdb` |

### 2.3 Notes

- ECS reads parameters **only when a task starts**. After changing a parameter, go to the service → **Update service → Force new deployment**.
- Add **tags** (`app=myapp`, `env=prod`) for cost tracking.
- If you later need rotation, consider **Secrets Manager** for the password instead (ECS supports it the same way, with a different ARN).

### 2.4 How your apps will receive these values

ECS injects each parameter as an **environment variable** in the container (configured in the task definition, Section 6/7). Map to names your apps already read:

**Spring Boot** (relaxed binding works from env vars):

| Env var in container | Parameter |
|---|---|
| `SPRING_DATASOURCE_URL` | `/myapp/prod/db/jdbc-url` |
| `SPRING_DATASOURCE_USERNAME` | `/myapp/prod/db/username` |
| `SPRING_DATASOURCE_PASSWORD` | `/myapp/prod/db/password` |

**NestJS** (names depend on your code — adapt):

| Env var | Parameter |
|---|---|
| `DB_HOST` | `/myapp/prod/db/host` |
| `DB_PORT` | `/myapp/prod/db/port` |
| `DB_NAME` | `/myapp/prod/db/name` |
| `DB_USER` | `/myapp/prod/db/username` |
| `DB_PASSWORD` | `/myapp/prod/db/password` |

> ECS cannot concatenate parameters into a single string, which is why `jdbc-url` is stored as a full value for Spring. If you prefer individual params, set Spring's URL as a plain environment variable `jdbc:postgresql://${DB_HOST}:${DB_PORT}/${DB_NAME}` — Spring resolves `${...}` placeholders in property values.

---

## 3. Push Images to Amazon ECR

### 3.1 Create repositories (console)

1. Console → **Elastic Container Registry** → **Private registry → Repositories** → **Create repository**.
2. **Visibility:** Private. **Repository name:** `myapp/spring-api`.
3. **Tag immutability:** *Enabled* (prevents overwriting a tag like `1.0.3` — recommended for production).
4. **Encryption:** AES-256 (default).
5. Click **Create**. Repeat for `myapp/nest-api`.
6. (Recommended) Open each repo → **Lifecycle policy → Create rule**: *Image status = Any, Count more than 20* → expire, to control storage cost.

### 3.2 Push your existing images

ECR has no upload button in the console, so you need Docker on a machine that holds the images (your current EC2 host works well, or your laptop):

1. In ECR, select the repository → click **View push commands**. The console shows exact commands pre-filled with your account and region.
2. On the machine with Docker (needs the AWS CLI configured with credentials/IAM role allowed to push to ECR):
   - Authenticate Docker to ECR (command 1 from the dialog).
   - `docker tag <local-image>:<tag> <ACCOUNT_ID>.dkr.ecr.<region>.amazonaws.com/myapp/spring-api:1.0.0`
   - `docker push <ACCOUNT_ID>.dkr.ecr.<region>.amazonaws.com/myapp/spring-api:1.0.0`
3. Repeat for Nest.
4. Back in the console, open the repo and confirm the image + tag appear. **Copy the full Image URI** (you'll paste it in the task definition).

> **Important:** if your EC2 is x86_64 and you plan to run Fargate on x86_64, nothing changes. If you build on an Apple-silicon Mac, build with `--platform linux/amd64` or select the ARM64 architecture in the task definition.
> **Use explicit version tags** (`1.0.0`), not `latest`, so rollbacks are predictable.

### 3.3 Scan on push (optional)

ECR → **Private registry → Settings → Scanning configuration** → enable *Enhanced* or *Basic scanning on push*.

---

## 4. IAM Roles

You need up to three roles. Create them in **IAM → Roles → Create role**.

### 4.1 Task Execution Role (required, both Fargate and EC2)

Used by ECS itself to pull images, write logs, and **fetch your parameters**.

1. **Trusted entity type:** AWS service → **Use case:** *Elastic Container Service* → *Elastic Container Service Task* → Next.
2. Attach policy **`AmazonECSTaskExecutionRolePolicy`**.
3. Name it `myapp-ecsTaskExecutionRole` → Create.
4. Open the role → **Add permissions → Create inline policy → JSON** and paste:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "ReadAppParameters",
      "Effect": "Allow",
      "Action": ["ssm:GetParameters", "ssm:GetParameter", "ssm:GetParametersByPath"],
      "Resource": "arn:aws:ssm:us-east-1:<ACCOUNT_ID>:parameter/myapp/prod/*"
    },
    {
      "Sid": "DecryptWithDefaultSsmKey",
      "Effect": "Allow",
      "Action": "kms:Decrypt",
      "Resource": "arn:aws:kms:us-east-1:<ACCOUNT_ID>:key/<KEY_ID_OF_alias/aws/ssm>"
    }
  ]
}
```

   - To find the KMS key ID: **KMS → AWS managed keys → `aws/ssm`** → copy the Key ARN.
   - If you used a customer-managed KMS key, use that key's ARN instead.
5. Name the policy `myapp-read-ssm-params`.

### 4.2 Task Role (recommended)

Used by **your application code** at runtime (e.g., if Nest calls S3 or SQS). Create the same way (*Elastic Container Service Task*), attach only what the app needs, name it `myapp-ecsTaskRole`. If the app needs no AWS API access, create it empty or skip it.

### 4.3 ECS Instance Role (**only for Part B — ECS on EC2**)

1. Create role → AWS service → **EC2** use case.
2. Attach **`AmazonEC2ContainerServiceforEC2Role`** and **`AmazonSSMManagedInstanceCore`** (lets you use Session Manager instead of SSH).
3. Name it `myapp-ecsInstanceRole`. (The console wizard can also create `ecsInstanceRole` for you automatically.)

---

## 5. Shared Resources (Logs and Load Balancer)

### 5.1 CloudWatch log groups

CloudWatch → **Logs → Log groups → Create log group**:
- `/ecs/myapp/spring-api` — Retention: 30 days
- `/ecs/myapp/nest-api` — Retention: 30 days

(The task definition wizard can auto-create them, but creating them yourself lets you set retention.)

### 5.2 Target groups

EC2 Console → **Load Balancing → Target Groups → Create target group**.

**Spring target group**
1. **Target type:** **IP addresses** (required for `awsvpc` networking, used by Fargate and recommended for EC2).
2. **Name:** `myapp-spring-tg`; **Protocol:HTTP**, **Port:8080**; **VPC:** your VPC; **Protocol version:** HTTP1.
3. **Health checks:** Protocol HTTP, **Path** `/actuator/health`, advanced: Healthy threshold 2, Unhealthy 3, Timeout 5 s, Interval 15–30 s, **Success codes** `200`.
4. Next → **do not register any targets** (ECS does that) → Create target group.

**Nest target group:** same, name `myapp-nest-tg`, port `3000`, health path `/health`.

> Spring needs time to boot. If tasks get killed during startup, set a **Health check grace period** on the ECS service (Section 6.5 step 9).

### 5.3 Application Load Balancer

1. EC2 → **Load Balancers → Create load balancer → Application Load Balancer**.
2. **Name:** `myapp-alb`; **Scheme:** Internet-facing; **IP type:** IPv4.
3. **Network mapping:** your VPC, select **≥2 public subnets** in different AZs.
4. **Security groups:** remove default, select `myapp-alb-sg`.
5. **Listeners:**
   - HTTPS 443 → select an **ACM certificate** (Certificate Manager → Request a public certificate first; validate via DNS). Default action: forward to `myapp-spring-tg`.
   - (Optional) HTTP 80 → redirect to HTTPS 443.
6. Create the load balancer.
7. **Add path rules:** open the HTTPS listener → **Manage rules → Add rule**:
   - Rule 1: Path is `/api/spring/*` → Forward to `myapp-spring-tg`
   - Rule 2: Path is `/api/nest/*` → Forward to `myapp-nest-tg`
   - Default action: fixed response 404 (cleaner than sending unknown traffic to one service).

> Your apps must respond on those paths (e.g., Spring `server.servlet.context-path=/api/spring`) — **or** use host-based rules instead (`spring.api.example.com`, `nest.api.example.com`) so you don't change application paths. Choose whichever matches how you route today.

### 5.4 (Optional) Connect CloudFront to the ALB

1. CloudFront → your distribution → **Origins → Create origin**: Origin domain = the ALB DNS name; Protocol **HTTPS only**.
2. **Behaviors → Create behavior**: Path pattern `/api/*`; origin = ALB; Viewer protocol policy *Redirect HTTP to HTTPS*; Allowed methods *GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE*; **Cache policy = CachingDisabled**; **Origin request policy = AllViewer** (forwards headers/query strings/cookies).
3. The ALB certificate must match the origin domain name CloudFront uses (use a custom domain like `origin.example.com` pointing at the ALB).
4. Check your CORS config and Angular `environment.ts` API base URL.

---

# PART A — ECS on Fargate

## 6. Fargate Step-by-Step

### 6.1 Create the cluster

1. Console → **Elastic Container Service → Clusters → Create cluster**.
2. **Cluster name:** `myapp-prod`.
3. **Infrastructure:** check **AWS Fargate (serverless)** only.
4. **Monitoring:** enable **Container Insights** (extra cost; helps with CPU/memory graphs). Optional.
5. Create.

### 6.2 Create the Spring task definition

ECS → **Task definitions → Create new task definition** (use the form, not JSON).

**Step 1 — Task definition configuration**
- **Family:** `myapp-spring`
- **Launch type:** **AWS Fargate**
- **OS/Architecture:** Linux/X86_64 (match your image)
- **CPU:** `0.5 vCPU`; **Memory:** `1 GB` (Spring Boot often needs **1–2 GB**; start with `1 vCPU / 2 GB` if unsure — check your `docker stats`).
- **Task role:** `myapp-ecsTaskRole`
- **Task execution role:** `myapp-ecsTaskExecutionRole`

**Step 2 — Container details**
- **Name:** `spring-api`
- **Image URI:** `<ACCOUNT_ID>.dkr.ecr.<region>.amazonaws.com/myapp/spring-api:1.0.0`
- **Essential container:** Yes
- **Container port:** `8080`, Protocol TCP, Port name `http`, App protocol HTTP.
- **Environment variables** → **Add environment variable** (for non-secret config):
  - `SPRING_PROFILES_ACTIVE` = `prod`
  - `JAVA_TOOL_OPTIONS` = `-XX:MaxRAMPercentage=75` (prevents the JVM from exceeding task memory)
- **Environment variables → set Type to `ValueFrom`** for parameters (this is the key step):

| Key | Value type | Value |
|---|---|---|
| `SPRING_DATASOURCE_URL` | ValueFrom | `/myapp/prod/db/jdbc-url` |
| `SPRING_DATASOURCE_USERNAME` | ValueFrom | `/myapp/prod/db/username` |
| `SPRING_DATASOURCE_PASSWORD` | ValueFrom | `/myapp/prod/db/password` |

  (Same region → the parameter **name** is enough; otherwise use the full ARN `arn:aws:ssm:<region>:<ACCOUNT_ID>:parameter/myapp/prod/db/password`.)
- **Logging:** **Use log collection** → `awslogs`: group `/ecs/myapp/spring-api`, region, stream prefix `ecs`.
- **Health check (container, optional):** Command `CMD-SHELL, curl -f http://localhost:8080/actuator/health || exit 1`, interval 30, timeout 5, retries 3, **start period 60**. (Requires `curl` in the image; the ALB health check already covers this, so skip if curl isn't installed.)
- **Resource limits / HealthCheck / Docker config:** leave defaults.

**Step 3 — Storage:** Fargate ephemeral storage 21 GiB by default (raise up to 200 GiB if needed).

**Step 4 — Review → Create.**

### 6.3 Create the Nest task definition

Repeat 6.2 with: family `myapp-nest`, container name `nest-api`, image `.../myapp/nest-api:1.0.0`, port `3000`, CPU `0.25 vCPU` / memory `0.5–1 GB`, log group `/ecs/myapp/nest-api`, and the `DB_*` ValueFrom mappings from Section 2.4. Add `NODE_ENV=production`.

### 6.4 Create the Spring service

1. ECS → Clusters → `myapp-prod` → **Services tab → Create**.
2. **Environment**
   - **Compute options:** *Launch type* → **FARGATE**; Platform version **LATEST**.
3. **Deployment configuration**
   - **Application type:** Service
   - **Task definition family:** `myapp-spring`, Revision: LATEST
   - **Service name:** `spring-svc`
   - **Desired tasks:** `2` (one per AZ for availability; use 1 for testing)
   - **Deployment options:** Rolling update; Min running tasks 100%, Max running tasks 200%.
   - **Deployment failure detection:** enable **Use the Amazon ECS deployment circuit breaker** + **Rollback on failure**.
4. **Networking**
   - **VPC:** your VPC
   - **Subnets:** your **private** subnets (≥2 AZs)
   - **Security group:** *Use an existing security group* → `myapp-ecs-sg` (remove default)
   - **Public IP:** **Turned off** for private subnets (with NAT/VPC endpoints) / **Turned on** for public subnets.
5. **Load balancing**
   - **Load balancer type:** Application Load Balancer → **Use an existing load balancer** → `myapp-alb`
   - **Container to load balance:** `spring-api 8080:8080`
   - **Listener:** Use existing → HTTPS:443
   - **Target group:** Use existing → `myapp-spring-tg`
   - **Health check grace period:** `90` seconds (Spring startup time)
6. **Service auto scaling (optional):** Use service auto scaling → Min `2`, Max `4` → **Policy type:** Target tracking → metric **ECSServiceAverageCPUUtilization**, target `60`, scale-in cooldown 300 s, scale-out 60 s.
7. Click **Create**.

### 6.5 Create the Nest service

Same as 6.4: `nest-svc`, task definition `myapp-nest`, container `nest-api 3000:3000`, target group `myapp-nest-tg`, grace period `30`.

> If you reuse the target group rules from Section 5.3 you don't need to touch the listener again.

### 6.6 Verify

1. **Service → Tasks tab:** status should move `PROVISIONING → PENDING → RUNNING`.
2. **Service → Health and metrics / Logs tab:** confirm the app logs show a successful DB connection (Spring: `HikariPool-1 - Start completed`).
3. **EC2 → Target Groups → each TG → Targets:** should show **healthy**.
4. Call `https://<alb-dns-or-domain>/api/spring/actuator/health` in a browser.

### 6.7 Updating the app later (deploying a new version)

1. Push a new tag (`1.0.1`) to ECR.
2. ECS → **Task definitions → `myapp-spring` → Create new revision** → change the image tag → Create.
3. Cluster → Service → **Update service** → choose the new revision → **Update**. (Rolling deploy with auto rollback.)
4. For *only* a parameter change: **Update service → check "Force new deployment"** → Update.

---

# PART B — ECS on EC2 Launch Type

Use this when you need to keep EC2 instances (cost optimization, special instance types, etc.). Sections 1–5 and IAM roles are identical. Differences are the **cluster infrastructure** and the **task definition/service launch type**.

## 7. ECS on EC2 Step-by-Step

### 7.1 Create the cluster with EC2 capacity

1. ECS → **Clusters → Create cluster**.
2. **Cluster name:** `myapp-prod-ec2`.
3. **Infrastructure:** uncheck Fargate (or keep both) and check **Amazon EC2 instances**.
4. **Auto Scaling group (ASG):** *Create new ASG*.
   - **Provisioning model:** On-demand (Spot saves money but can be interrupted).
   - **Container instance AMI:** **Amazon Linux 2023 (ECS-optimized)** — latest.
   - **EC2 instance type:** e.g. `t3.medium` (2 vCPU/4 GB) — size so *both services fit* with headroom (sum of task memory < instance memory minus ~512 MB overhead).
   - **Desired capacity:** min `2`, max `4` (two instances across two AZs for HA; 1 for testing).
   - **SSH key pair:** optional — prefer Session Manager.
   - **Root EBS volume size:** 30 GiB.
5. **Network settings for EC2 instances**
   - **VPC / Subnets:** private subnets (≥2 AZs)
   - **Security group:** `myapp-ecs-sg`
   - **Auto-assign public IP:** off (private + NAT/endpoints) or on (public subnets).
6. **Container instance IAM role:** `myapp-ecsInstanceRole` (or let console create `ecsInstanceRole`).
7. Create. Wait until **Infrastructure tab → Container instances** shows instances **ACTIVE** (2–5 minutes) with registered CPU/memory.

> The wizard also creates a **capacity provider** tied to this ASG. Turn on **managed scaling** (Cluster → Infrastructure → capacity provider → *Update*) so ECS adds/removes instances when tasks don't fit. Set target capacity `100` and enable **managed termination protection** if you want safe scale-in.

### 7.2 Task definitions (EC2 variant)

Create as in 6.2/6.3 but at **Step 1**:
- **Launch type:** **Amazon EC2 instances** (not Fargate).
- **Network mode:** **`awsvpc`** (recommended: each task gets its own ENI, per-task security groups, IP target groups). Note: instance types have an ENI limit (a `t3.medium` supports only ~2 awsvpc tasks per instance unless you enable **ENI trunking** in ECS → Account settings → *Account Settings* → `awsvpcTrunking`, which is only supported on certain instance families such as `c5/m5/r5`).
  - If you want simple packing of many tasks on a small instance, use **`bridge`** mode with **dynamic host ports** (container port 8080 → host port `0`) and a target group of **type Instance**. In that case the ECS security group must allow the ephemeral port range `32768–65535` from the ALB SG.
- **Task size:** In EC2 mode you can set CPU/memory at the **container level** (`Memory hard limit`, e.g. `1024` MiB; optional soft limit `512`). Task-level sizing is also allowed. Keep the sum below instance capacity.
- Everything else (image, ValueFrom parameters, logging) is identical to Section 6.2.

### 7.3 Services (EC2 variant)

ECS → cluster `myapp-prod-ec2` → **Services → Create**:

1. **Compute options:** **Capacity provider strategy** → *Use cluster default* (the ASG provider).
2. Deployment: task definition `myapp-spring`, service name `spring-svc`, desired tasks `2`.
3. **Task placement (EC2 only):** Template *AZ Balanced Spread* (spreads tasks across AZs, then instances).
4. **Networking (when `awsvpc`):** subnets, security group `myapp-ecs-sg`; public IP is not available on EC2 launch type tasks (instances need NAT/endpoints regardless).
5. **Load balancing:** same as 6.4 step 5. (With `bridge` mode, the target group must be *Instance* type.)
6. Create. Repeat for `nest-svc`.

### 7.4 Operating ECS on EC2

- **Patching:** new ECS-optimized AMIs are released regularly. To roll: EC2 → Auto Scaling Groups → select ASG → **Instance refresh → Start instance refresh** (min healthy 50%).
- **Scaling:** two layers — **service auto scaling** (task count) and **capacity provider managed scaling** (instance count).
- **Access to instances:** Systems Manager → **Session Manager → Start session** (no SSH or open port 22 needed).
- **Disk full:** Docker images accumulate; ECS agent cleans up automatically, but monitor EBS usage in CloudWatch.

---

## 8. Cutover Plan (zero/low downtime)

1. Keep the old EC2 containers running; deploy the ECS services in parallel (they point to the same RDS).
2. Test the ALB directly: `https://<alb-dns>/api/spring/...`.
3. Confirm DB behavior: migrations (Flyway/Liquibase/TypeORM `synchronize`) — **do not run two versions of migrations at the same time**; disable auto-schema-sync in prod.
4. **Switch traffic:**
   - Route 53 → update the API record to alias the ALB (lower the TTL to 60 s a day before), **or**
   - CloudFront → update the `/api/*` behavior origin from the old EC2 to the ALB.
5. Watch for 24–48 h: ECS service **Metrics**, CloudWatch Logs, target group 5XX count, RDS connections.
6. Decommission: stop containers on old EC2 → later terminate/snapshot the instance → remove its rule from the RDS security group.

**Rollback:** switch Route 53/CloudFront back to the old EC2 (keep it running until you're confident).

### RDS connection limits

Each task opens its own connection pool. Total = tasks × pool size (Hikari default 10). Check `max_connections` in the RDS parameter group (Console → RDS → Databases → your DB → Monitoring → *Database connections*) and size pools accordingly.

---

## 9. Troubleshooting Table

| Symptom | Where to look (console) | Likely cause / fix |
|---|---|---|
| Task stops with `CannotPullContainerError` | ECS → Service → Tasks → Stopped task → *Stopped reason* | No route to ECR: add NAT or VPC endpoints (`ecr.api`, `ecr.dkr`, S3 gateway) or enable public IP; wrong image URI/tag; execution role missing |
| `ResourceInitializationError: unable to pull secrets ... ssm` | Stopped task details | Execution role lacks `ssm:GetParameters` / `kms:Decrypt`; parameter name typo; wrong region; no route to the SSM endpoint (add `ssm` VPC endpoint or NAT) |
| Container exits immediately (exit code 1) | CloudWatch Logs → `/ecs/myapp/...` | App config error, DB connection failure, wrong env var names |
| Exit code 137 | Task details | Out of memory — increase task/container memory; set JVM `MaxRAMPercentage` |
| Tasks keep restarting; target `unhealthy` | EC2 → Target group → Targets (see *Health status details*) | Wrong health path/port, service SG doesn't allow ALB SG, app slow to start → raise **health check grace period** |
| `Connection timed out` to DB | Task logs | RDS SG missing inbound 5432 from `myapp-ecs-sg`; RDS in a different VPC; wrong host |
| `password authentication failed` | Task logs | Wrong parameter value, or newline/space in the pasted parameter |
| 502/504 from ALB | ALB → Monitoring | No healthy targets, app crashed, or idle timeout; increase ALB idle timeout if long requests |
| Service stuck: *unable to place a task* (EC2) | Service → Events | Not enough CPU/memory/ENIs on instances; scale ASG or lower task size; ENI trunking |
| *Container instance not registered* (EC2) | Cluster → Infrastructure | Instance role/SG/subnet has no route to ECS endpoint; wrong ECS cluster name in user data |
| CORS errors in Angular | Browser dev tools | Update allowed origins; CloudFront must forward `Origin` header (use AllViewer origin request policy) |

To see service events: **ECS → Cluster → Service → Events** tab. For failed tasks: **Tasks → Stopped filter → click task → Stopped reason**.

---

## 10. Cost & Hardening Checklist

- [ ] Task execution role limited to `/myapp/prod/*` parameters only
- [ ] ECR **tag immutability** ON, **lifecycle policy** set, **scan on push** ON
- [ ] Tasks in **private subnets**; RDS not publicly accessible
- [ ] ALB SG restricted to the CloudFront prefix list (if fronted by CloudFront)
- [ ] CloudWatch log **retention** configured
- [ ] **Deployment circuit breaker + rollback** enabled
- [ ] CloudWatch Alarms (CloudWatch → Alarms → Create): ALB `HTTPCode_Target_5XX_Count`, TG `UnHealthyHostCount`, ECS `CPUUtilization`/`MemoryUtilization`, RDS CPU/connections → notify an **SNS** topic
- [ ] RDS automated backups + (optional) Multi-AZ
- [ ] Fargate: consider **Compute Savings Plans** once usage is steady; **Fargate Spot** for non-critical workloads
- [ ] ECS on EC2: consider Reserved Instances/Savings Plans; keep instance AMI updated

---

## 11. Quick Reference — Order of Operations

1. Security groups (ALB, ECS) + RDS inbound rule
2. Parameter Store parameters
3. ECR repositories → push images
4. IAM roles (execution, task, instance role if EC2)
5. CloudWatch log groups
6. Target groups → Application Load Balancer + listener rules
7. ECS cluster (Fargate **or** EC2 + ASG)
8. Task definitions (with `ValueFrom` parameters)
9. ECS services (attach to target groups)
10. Verify health → test via ALB → switch DNS/CloudFront → monitor → decommission old EC2
