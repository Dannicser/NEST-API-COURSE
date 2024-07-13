import { forwardRef, Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { rolesProviders } from './repository/roles.provider';
import { DatabaseModule } from 'src/database/database.module';
import { userRolesProviders } from './repository/user-roles.provider';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [RolesController],
  providers: [RolesService, ...rolesProviders, ...userRolesProviders],
  imports: [DatabaseModule, forwardRef(() => UsersModule)],
  exports: [RolesService],
})
export class RolesModule {}
