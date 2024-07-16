import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}
  @ApiTags('Posts') // group by domain
  @Post('/create')
  @UseInterceptors(FileInterceptor('image'))
  public async createPost(@Body() dto: CreatePostDto, @UploadedFile() image) {
    return this.postService.create(dto, image);
  }
}
