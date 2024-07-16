import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { postProviders } from './repository/posts.repository';
import { FilesModule } from 'src/files/files.module';

@Module({
  controllers: [PostsController],
  providers: [PostsService, ...postProviders],
  imports: [FilesModule],
})
export class PostsModule {}
