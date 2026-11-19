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
import { PostsService } from './posts.service';
import { PostDto } from './post.dto';

@Controller('posts-dto')
export class PostControllerDto {

  constructor(private readonly postsService: PostsService){
    
  }
  // GET /posts
  @Get()
  getAllPosts() {
    return this.postsService.findAll();
  }


  // POST /posts
  @Post()
  create(@Body() createPostDto: PostDto) {
    return this.postsService.create(createPostDto);
  }
}