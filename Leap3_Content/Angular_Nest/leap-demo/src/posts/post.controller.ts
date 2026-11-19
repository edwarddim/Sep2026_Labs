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
import { AppService } from '../app.service';

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