import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './repository/users.model';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/auth/role.decorator';
import { RoleGuard } from 'src/auth/role.guard';
import { BanUserDto } from './dto/ban-user.dto';
import { AddRoleDto } from './dto/add-role.dto';

@ApiTags('Users') // group by domain
@Controller('/users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiOperation({ summary: 'Creating a new user' }) //desc
  @ApiResponse({ status: 200, type: User }) // response
  @Post()
  async createUser(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Getting users' })
  @ApiResponse({ status: 200, type: [User] })
  @UseGuards(AuthGuard)
  @Roles('ADMIN')
  @UseGuards(RoleGuard)
  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @ApiOperation({ summary: 'ban of user' })
  @Post('/ban')
  banUser(@Body() dto: BanUserDto) {}

  @ApiOperation({ summary: 'adding a role' })
  @Post('/role')
  addRole(@Body() dto: AddRoleDto) {
    return this.userService.addRole(dto);
  }
}
