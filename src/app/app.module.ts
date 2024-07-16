import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/auth/auth.module';

import { DatabaseModule } from 'src/database/database.module';
import { PostsModule } from 'src/posts/posts.module';
import { RolesModule } from 'src/roles/roles.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }),
    DatabaseModule,
    UsersModule,
    RolesModule,
    AuthModule,
    PostsModule,
  ],
})
export class AppModule {}
