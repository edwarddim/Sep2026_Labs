"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const app_myservice_1 = require("./app.myservice");
//https://leapcell.medium.com/10-minutes-from-first-line-of-code-to-live-deployment-a-super-fast-nest-js-blog-course-2f4f748894cf
let AppController = class AppController {
    constructor(service, mserv) {
        this.service = service;
        this.mserv = mserv;
        console.log(mserv);
        console.log(service);
    }
    getHello() {
        // return 'Hello from NestJS!';
        console.log(`getHello:: service is ${this.service}`);
        return this.service.getHello();
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService, app_myservice_1.MyService])
], AppController);
// }
// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   Patch,
//   Post,
//   Put,
//   Query,
// } from '@nestjs/common';
// import { AppService } from './app.service';
// @Controller('posts')
// export class AppController {
//   private posts = [
//     {
//       id: 1,
//       title: 'Introduction to NestJS',
//       content: 'NestJS is a Node.js framework built with TypeScript.',
//       createdAt: new Date('2026-10-01'),
//     },
//     {
//       id: 2,
//       title: 'Understanding REST APIs',
//       content: 'REST APIs use HTTP methods to perform operations on resources.',
//       createdAt: new Date('2026-10-02'),
//     },
//     {
//       id: 3,
//       title: 'Learning TypeScript',
//       content: 'TypeScript adds static typing to JavaScript.',
//       createdAt: new Date('2026-10-03'),
//     },
//   ];
//   constructor(private readonly aservice:AppService){
//     console.log(aservice);
//   }
//     @Get("hello")
//   getHello(): string {
//     // return 'Hello from NestJS!';
//     return this.aservice.getHello();
//   }
//   // GET /posts
//   @Get()
//   getAllPosts() {
//     return this.posts;
//   }
//   // GET /posts?title=nestjs
//   @Get('search')
//   searchPosts(@Query('title') title: string) {
//     return this.posts.filter(post =>
//       post.title.toLowerCase().includes(title.toLowerCase())
//     );
//   }
//   // GET /posts/1
//   @Get(':id')
//   getPostById(@Param('id') id: string) {
//     const postId = Number(id);
//     return this.posts.find(post => post.id === postId);
//   }
//   // POST /posts
//   @Post()
//   createPost(@Body() body: any) {
//     const newPost = {
//       id: this.posts.length + 1,
//       title: body.title,
//       content: body.content,
//       createdAt: new Date(),
//     };
//     this.posts.push(newPost);
//     return newPost;
//   }
//   // PUT /posts/1
//   @Put(':id')
//   replacePost(
//     @Param('id') id: string,
//     @Body() body: any,
//   ) {
//     const postId = Number(id);
//     const index = this.posts.findIndex(post => post.id === postId);
//     if (index === -1) {
//       return { message: 'Post not found' };
//     }
//     const updatedPost = {
//       id: postId,
//       title: body.title,
//       content: body.content,
//       createdAt: this.posts[index].createdAt,
//     };
//     this.posts[index] = updatedPost;
//     return updatedPost;
//   }
//   // PATCH /posts/1
//   @Patch(':id')
//   updatePost(
//     @Param('id') id: string,
//     @Body() body: any,
//   ) {
//     const postId = Number(id);
//     const post = this.posts.find(post => post.id === postId);
//     if (!post) {
//       return { message: 'Post not found' };
//     }
//     if (body.title !== undefined) {
//       post.title = body.title;
//     }
//     if (body.content !== undefined) {
//       post.content = body.content;
//     }
//     return post;
//   }
//   // DELETE /posts/1
//   @Delete(':id')
//   deletePost(@Param('id') id: string) {
//     const postId = Number(id);
//     const index = this.posts.findIndex(post => post.id === postId);
//     if (index === -1) {
//       return { message: 'Post not found' };
//     }
//     const deletedPost = this.posts.splice(index, 1);
//     return deletedPost[0];
//   }
// }
