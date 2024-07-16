import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { postProviders } from './repository/posts.repository';

@Module({
  controllers: [PostsController],
  providers: [PostsService, ...postProviders],
})
export class PostsModule {}
