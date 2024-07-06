import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from 'src/database/database.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }), DatabaseModule, UsersModule],
})
export class AppModule {}
