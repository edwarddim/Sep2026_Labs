# Building a NestJS Application from Scratch (Manual Setup)

This guide walks through creating a minimal NestJS application **by hand**, without the Nest CLI. Doing it manually shows what each piece does: the entry point, the root module, a controller, and the TypeScript configuration that makes decorators work.

**Reference:** [NestJS Docs: First Steps](https://docs.nestjs.com/first-steps)

---

## Table of Contents

- [Building a NestJS Application from Scratch (Manual Setup)](#building-a-nestjs-application-from-scratch-manual-setup)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [1. Create the Project Folder](#1-create-the-project-folder)
  - [2. Initialize npm](#2-initialize-npm)
  - [3. Install Dependencies](#3-install-dependencies)
  - [4. Create `tsconfig.json`](#4-create-tsconfigjson)
    - [Two settings that matter most for NestJS](#two-settings-that-matter-most-for-nestjs)
    - [Other settings, briefly](#other-settings-briefly)
  - [5. Create the Source Folder](#5-create-the-source-folder)
  - [6. Create `main.ts`](#6-create-maints)
  - [7. Create `app.module.ts`](#7-create-appmodulets)
  - [8. Create a Controller](#8-create-a-controller)
  - [9. Register the Controller with the Module](#9-register-the-controller-with-the-module)
  - [10. Add the npm Scripts](#10-add-the-npm-scripts)
  - [11. Start NestJS](#11-start-nestjs)
    - [Production-style run](#production-style-run)
  - [Troubleshooting](#troubleshooting)
  - [Next Steps](#next-steps)
    - [1. Add a provider (service) and dependency injection](#1-add-a-provider-service-and-dependency-injection)
    - [2. Complete CRUD Code:](#2-complete-crud-code)
    - [3. Key NestJS building blocks](#3-key-nestjs-building-blocks)
    - [4. Using the Nest CLI instead](#4-using-the-nest-cli-instead)
    - [5. Further reading](#5-further-reading)

---

## Prerequisites

- **Node.js** 18 or later (check with `node -v`)
- **npm** (bundled with Node.js)
- A code editor and a terminal

---

## 1. Create the Project Folder

```bash
mkdir leap-demo
cd leap-demo
```

## 2. Initialize npm

```bash
npm init -y
```

This creates a default `package.json`.

## 3. Install Dependencies

**Runtime dependencies:**

```bash
npm i @nestjs/core @nestjs/common @nestjs/platform-express reflect-metadata rxjs
```

| Package | Purpose |
| --- | --- |
| `@nestjs/core` | The Nest runtime (`NestFactory`, DI container, etc.) |
| `@nestjs/common` | Decorators and utilities (`@Controller`, `@Get`, `@Module`, `@Injectable`) |
| `@nestjs/platform-express` | Express HTTP adapter, so Nest can serve HTTP requests |
| `reflect-metadata` | Polyfill for the metadata API that decorators rely on |
| `rxjs` | Reactive library used internally by Nest |

**Development dependencies:**

```bash
npm install -D typescript ts-node ts-node-dev @types/node
```

| Package | Purpose |
| --- | --- |
| `typescript` | The TypeScript compiler (`tsc`) |
| `ts-node` | Runs TypeScript directly in Node |
| `ts-node-dev` | Runs TypeScript and **restarts on file changes** (used for `start:dev`) |
| `@types/node` | Type definitions for Node.js APIs |

> **Note:** The original notes also installed `tsx`. It is not used in the final setup (see the [Troubleshooting](#troubleshooting) section for why), so it is omitted here.

## 4. Create `tsconfig.json`

Create the file in the project root:

```text
leap-demo/
└── tsconfig.json
```

Put this inside:

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "ES2021",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "strict": true,
    "esModuleInterop": true,
    "types": ["node"],
    "rootDir": "src",
    "outDir": "dist"
  },
  "include": ["src/**/*"]
}
```

### Two settings that matter most for NestJS

```json
"experimentalDecorators": true,
"emitDecoratorMetadata": true
```

NestJS relies heavily on decorators such as:

```ts
@Controller()
@Get()
@Module()
@Injectable()
```

- `experimentalDecorators` enables decorator syntax.
- `emitDecoratorMetadata` makes TypeScript emit type information at runtime. Nest's **dependency injection** uses this to figure out which classes to inject into constructors.

### Other settings, briefly

| Option | Meaning |
| --- | --- |
| `module: commonjs` | Output CommonJS modules (what `node dist/main.js` expects) |
| `target: ES2021` | JavaScript version to compile to |
| `strict` | Enables all strict type-checking options |
| `esModuleInterop` | Smoother imports of CommonJS packages |
| `rootDir` / `outDir` | Source in `src/`, compiled output in `dist/` |

## 5. Create the Source Folder

```bash
mkdir src
```

The project will eventually look like this:

```text
leap-demo/
├── node_modules/
├── src/
│   ├── main.ts
│   ├── app.module.ts
│   └── app.controller.ts
├── package.json
├── package-lock.json
└── tsconfig.json
```

## 6. Create `main.ts`

Create `src/main.ts`:

```ts
import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}

bootstrap();
```

This is the **entry point** of the NestJS application. The important line is:

```ts
const app = await NestFactory.create(AppModule);
```

Conceptually:

```text
main.ts
   ↓
NestFactory
   ↓
creates Nest application
   ↓
AppModule
```

> `import 'reflect-metadata';` must be loaded **before** any decorated class is evaluated, which is why it is the first import.

## 7. Create `app.module.ts`

Create `src/app.module.ts`:

```ts
import { Module } from '@nestjs/common';

@Module({})
export class AppModule {}
```

This is the **root module**. Every Nest app has at least one module, and it is the starting point Nest uses to build the application graph.

At this point:

```text
main.ts
   ↓
AppModule
```

But there is no controller yet, so the app has no routes.

## 8. Create a Controller

Create `src/app.controller.ts`:

```ts
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  getHello(): string {
    return 'Hello from NestJS!';
  }
}
```

Notice the two decorators:

- **`@Controller()`** tells Nest: *this class contains HTTP request handlers.*
- **`@Get()`** tells Nest: *this method handles an HTTP GET request.*

You can pass a path to each one, for example `@Controller('users')` with `@Get(':id')` maps to `GET /users/:id`.

## 9. Register the Controller with the Module

Modify `src/app.module.ts`:

```ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  controllers: [AppController],
})
export class AppModule {}
```

Now the structure is:

```text
main.ts
   │
   ▼
AppModule
   │
   ▼
AppController
   │
   ▼
GET /
   │
   ▼
"Hello from NestJS!"
```

> ⚠️ **This registration step is very important.** Simply creating `app.controller.ts` does not make NestJS aware of it. The controller must be listed in a module's `controllers` array.

## 10. Add the npm Scripts

Open `package.json` and change the `scripts` section to:

```json
"scripts": {
  "build": "tsc",
  "start": "node dist/main.js"
}
```

| Script | What it does |
| --- | --- |
| `npm run build` | Compiles TypeScript from `src/` into `dist/` |
| `npm start` | Runs the compiled app (`build` first) |

## 11. Start NestJS

```bash
npm run build
npm run start
```

You should see output similar to:

```text
[Nest] ... LOG [NestFactory] Starting Nest application...
[Nest] ... LOG [InstanceLoader] AppModule dependencies initialized
[Nest] ... LOG [RoutesResolver] AppController {/}:
[Nest] ... LOG [RouterExplorer] Mapped {/, GET} route
[Nest] ... LOG [NestApplication] Nest application successfully started
```

Your server is running at **<http://localhost:3000>**. Open it in your browser and you should get:

```text
Hello from NestJS!
```

You can also test from the terminal:

```bash
curl http://localhost:3000
# Hello from NestJS!
```

### Production-style run

```bash
npm run build
npm start
```

---

## Troubleshooting

| Problem | Likely cause and fix |
| --- | --- |
| **`Cannot GET /`** (404) | The controller isn't registered. Add it to `controllers` in `AppModule` (step 9). |
| **`Reflect.getMetadata is not a function`** | `import 'reflect-metadata'` is missing or isn't the first import in `main.ts`. |
| **Decorator errors in the editor / compiler** | `experimentalDecorators` and `emitDecoratorMetadata` are not both `true` in `tsconfig.json`. |
| **`Missing script: "start:dev"`** | The script isn't in `package.json` (step 10). |
| **`EADDRINUSE: port 3000`** | Another process is using port 3000. Stop it, or change the port in `app.listen(...)`. |
| **Dependency injection fails with `tsx`** | `tsx` uses esbuild, which does **not** support `emitDecoratorMetadata`. Nest can't see constructor parameter types, so injection breaks. This is the most likely reason the original `tsx` script was labelled "broken". Use `ts-node-dev`, `ts-node`, or compile with `tsc`. |

---

## Next Steps

Once the basic app runs, these are the natural things to learn next.

### 1. Add a provider (service) and dependency injection

`src/app.service.ts`:

```ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello from NestJS!';
  }
}
```

Inject it into the controller:

```ts
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
```

Register it in the module:

```ts
@Module({
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

---

### 2. Complete CRUD Code:

Add a postcontroller as follows:

`src/post.controller.ts`:

```ts
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('posts')
export class PostController {

  private posts = [
    {
      id: 1,
      title: 'Introduction to NestJS',
      content: 'NestJS is a Node.js framework built with TypeScript.',
      createdAt: new Date('2026-10-01'),
    },
    {
      id: 2,
      title: 'Understanding REST APIs',
      content: 'REST APIs use HTTP methods to perform operations on resources.',
      createdAt: new Date('2026-10-02'),
    },
    {
      id: 3,
      title: 'Learning TypeScript',
      content: 'TypeScript adds static typing to JavaScript.',
      createdAt: new Date('2026-10-03'),
    },
  ];

  constructor(private readonly aservice:AppService){
    console.log(aservice);
    
  }
  // GET /posts
  @Get()
  getAllPosts() {
    return this.posts;
  }

  // GET /posts?title=nestjs
  @Get('search')
  searchPosts(@Query('title') title: string) {
    return this.posts.filter(post =>
      post.title.toLowerCase().includes(title.toLowerCase())
    );
  }
  // GET /posts/1
  @Get(':id')
  getPostById(@Param('id') id: string) {
    const postId = Number(id);

    return this.posts.find(post => post.id === postId);
  }


  // POST /posts
  @Post()
  createPost(@Body() body: any) {
    const newPost = {
      id: this.posts.length + 1,
      title: body.title,
      content: body.content,
      createdAt: new Date(),
    };

    this.posts.push(newPost);

    return newPost;
  }

  // PUT /posts/1
  @Put(':id')
  replacePost(
    @Param('id') id: string,
    @Body() body: any,
  ) {
    const postId = Number(id);

    const index = this.posts.findIndex(post => post.id === postId);

    if (index === -1) {
      return { message: 'Post not found' };
    }

    const updatedPost = {
      id: postId,
      title: body.title,
      content: body.content,
      createdAt: this.posts[index].createdAt,
    };

    this.posts[index] = updatedPost;

    return updatedPost;
  }

  // PATCH /posts/1
  @Patch(':id')
  updatePost(
    @Param('id') id: string,
    @Body() body: any,
  ) {
    const postId = Number(id);

    const post = this.posts.find(post => post.id === postId);

    if (!post) {
      return { message: 'Post not found' };
    }

    if (body.title !== undefined) {
      post.title = body.title;
    }

    if (body.content !== undefined) {
      post.content = body.content;
    }

    return post;
  }

  // DELETE /posts/1
  @Delete(':id')
  deletePost(@Param('id') id: string) {
    const postId = Number(id);

    const index = this.posts.findIndex(post => post.id === postId);

    if (index === -1) {
      return { message: 'Post not found' };
    }

    const deletedPost = this.posts.splice(index, 1);

    return deletedPost[0];
  }
}
```

Register it in the module:

```ts
@Module({
  controllers: [AppController, PostController],
  providers: [AppService],
})
export class AppModule {}
```

Rerun the application and test the REST API's using bruno or postman

### 3. Key NestJS building blocks

| Concept | Role |
| --- | --- |
| **Module** | Groups related controllers and providers (`@Module`) |
| **Controller** | Handles incoming requests and returns responses (`@Controller`) |
| **Provider / Service** | Business logic, injectable into other classes (`@Injectable`) |
| **Pipe** | Validates or transforms input (e.g. `ValidationPipe`) |
| **Guard** | Decides whether a request may proceed (e.g. authentication) |
| **Interceptor** | Wraps request handling (logging, response mapping, caching) |
| **Middleware** | Runs before route handlers, like Express middleware |

### 4. Using the Nest CLI instead

The official CLI generates all of this (plus testing and build config) automatically:

```bash
npm i -g @nestjs/cli
nest new project-name
```

Building manually first, as in this guide, makes it much easier to understand what the CLI generates.

### 5. Further reading

- [First Steps](https://docs.nestjs.com/first-steps)
- [Controllers](https://docs.nestjs.com/controllers)
- [Providers](https://docs.nestjs.com/providers)
- [Modules](https://docs.nestjs.com/modules)
