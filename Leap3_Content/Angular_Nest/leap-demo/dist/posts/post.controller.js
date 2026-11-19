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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("../app.service");
let PostController = class PostController {
    constructor(aservice) {
        this.aservice = aservice;
        this.posts = [
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
        console.log(aservice);
    }
    // GET /posts
    getAllPosts() {
        return this.posts;
    }
    // GET /posts?title=nestjs
    searchPosts(title) {
        return this.posts.filter(post => post.title.toLowerCase().includes(title.toLowerCase()));
    }
    // GET /posts/1
    getPostById(id) {
        const postId = Number(id);
        return this.posts.find(post => post.id === postId);
    }
    // POST /posts
    createPost(body) {
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
    replacePost(id, body) {
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
    updatePost(id, body) {
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
    deletePost(id) {
        const postId = Number(id);
        const index = this.posts.findIndex(post => post.id === postId);
        if (index === -1) {
            return { message: 'Post not found' };
        }
        const deletedPost = this.posts.splice(index, 1);
        return deletedPost[0];
    }
};
exports.PostController = PostController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostController.prototype, "getAllPosts", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('title')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "searchPosts", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "getPostById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "createPost", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "replacePost", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "updatePost", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "deletePost", null);
exports.PostController = PostController = __decorate([
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], PostController);
