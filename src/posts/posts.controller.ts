import { Body, Controller, Post, UploadedFile } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Post('/create')
  public async createPost(@Body() dto: CreatePostDto, @UploadedFile() image) {
    return this.postService.create(dto);
  }
}
