import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'email@mail.ru', description: 'unique email' })
  readonly email: string;

  @ApiProperty({ example: 'qwerty', description: 'password' })
  readonly password: string;
}
