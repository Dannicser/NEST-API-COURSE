import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { usersProviders } from './repository/users.provider';
import { DatabaseModule } from 'src/database/database.module';
import { RolesModule } from 'src/roles/roles.module';
import { AuthModule } from 'src/auth/auth.module';
import { UsersBanService } from './users.ban.service';

@Module({
  imports: [DatabaseModule, forwardRef(() => RolesModule), forwardRef(() => AuthModule)], // forwardRef для предотвращения кольцевых зависимостей
  controllers: [UsersController],
  providers: [UsersService, UsersBanService, ...usersProviders],
  exports: [UsersService],
})
export class UsersModule {}
