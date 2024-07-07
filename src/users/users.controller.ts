import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './repository/users.model';

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
  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }
}
