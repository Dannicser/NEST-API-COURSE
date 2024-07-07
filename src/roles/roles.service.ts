import { Inject, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './repository/roles.model';

@Injectable()
export class RolesService {
  constructor(@Inject('ROLES_REPOSITORY') private rolesRepository: typeof Role) {}

  async createRole(roleDto: CreateRoleDto) {
    const role = await this.rolesRepository.create(roleDto);

    return role;
  }

  async getRoleByType(type: string) {
    const role = await this.rolesRepository.findOne({
      where: {
        type,
      },
    });

    return role;
  }
}
