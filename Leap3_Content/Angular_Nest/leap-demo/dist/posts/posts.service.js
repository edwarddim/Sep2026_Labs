"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
let PostsService = class PostsService {
    constructor() {
        this.posts = [
            {
                id: 1,
                title: 'Introduction to NestJS',
                content: 'NestJS is a Node.js framework built with TypeScript.',
                createdAt: new Date('2026-10-01'),
            },
        ];
    }
    create(createPostDto) {
        const newPost = {
            id: this.posts.length + 1,
            title: createPostDto.title,
            content: createPostDto.content,
            createdAt: new Date(),
        };
        this.posts.push(newPost);
        return newPost;
    }
    findAll() {
        return this.posts;
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)()
], PostsService);
