import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';

@ApiTags('Roles') // group by domain
@Controller('/roles')
export class RolesController {
  constructor(private readonly roleService: RolesService) {}

  @ApiOperation({ summary: 'Creating a new role' })
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto);
  }

  @ApiOperation({ summary: 'Getting a role' })
  @Get('/:type')
  getByType(@Param('type') type: string) {
    return this.roleService.getRoleByType(type);
  }
}
