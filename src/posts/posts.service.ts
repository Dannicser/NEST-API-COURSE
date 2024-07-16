import { Inject, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './repository/posts.model';

@Injectable()
export class PostsService {
  constructor(@Inject('POST_REPOSITORY') private readonly postsRepository: typeof Post) {}

  public async create(dto: CreatePostDto) {
    const fileName = '';

    return this.postsRepository.create({ ...dto, img: fileName });
  }
}
