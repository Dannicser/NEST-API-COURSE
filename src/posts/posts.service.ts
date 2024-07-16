import { Inject, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './repository/posts.model';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class PostsService {
  constructor(
    @Inject('POST_REPOSITORY') private readonly postsRepository: typeof Post,
    private readonly fileService: FilesService,
  ) {}

  public async create(dto: CreatePostDto, image) {
    const fileName = this.fileService.createFile(dto, image);

    return this.postsRepository.create({ ...dto, img: fileName });
  }
}
