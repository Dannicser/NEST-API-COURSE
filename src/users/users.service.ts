import { Inject, Injectable } from '@nestjs/common';
import { User } from './repository/users.model';
import { CreateUserDto } from './dto/create-user.dto';

Injectable();
export class UsersService {
  constructor(@Inject('USERS_REPOSITORY') private userRepository: typeof User) {}

  async createUser(userDto: CreateUserDto) {
    const user = await this.userRepository.create(userDto);

    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll();

    return users;
  }
}
