import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './repository/users.model';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/auth/role.decorator';
import { RoleGuard } from 'src/auth/role.guard';
import { BanUserDto } from './dto/ban-user.dto';
import { AddRoleDto } from './dto/add-role.dto';
import { UsersBanService } from './users.ban.service';
import { UnbanUserDto } from './dto/unban-user.dto';

@ApiTags('Users') // group by domain
@Controller('/users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly userBanService: UsersBanService,
  ) {}

  @ApiOperation({ summary: 'Creating a new user' }) //desc
  @ApiResponse({ status: 200, type: User }) // response
  @Post()
  async createUser(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Getting user by id' }) //desc
  @ApiResponse({ status: 200 }) // response
  @Get('/:id')
  async getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
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

  @ApiOperation({ summary: 'adding a role' })
  @Post('/role')
  addRole(@Body() dto: AddRoleDto) {
    return this.userService.addRole(dto);
  }

  @ApiOperation({ summary: 'ban of user' })
  @Post('/ban')
  banUser(@Body() dto: BanUserDto) {
    return this.userBanService.banUser(dto);
  }

  @ApiOperation({ summary: 'unban of user' })
  @Post('/unban')
  unbanUser(@Body() dto: UnbanUserDto) {
    return this.userBanService.unbanUser(dto);
  }
}
