import { Injectable } from '@nestjs/common';
import { PostDto } from './post.dto';

@Injectable()
export class PostsService {

  private posts = [
    {
      id: 1,
      title: 'Introduction to NestJS',
      content: 'NestJS is a Node.js framework built with TypeScript.',
      createdAt: new Date('2026-10-01'),
    },
  ];

  create(createPostDto: PostDto) {

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
}