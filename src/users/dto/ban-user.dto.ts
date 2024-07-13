import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class BanUserDto {
  @ApiProperty({ example: '1', description: 'user id' })
  @IsString({
    message: 'field must be string',
  })
  @Length(1, 1000000, { message: 'length must be from 1' })
  readonly userId: string;

  @ApiProperty({ example: '1', description: 'cheating' })
  @Length(5, 100, { message: 'length must be from 5 to 100' })
  @IsString({
    message: 'field must be string',
  })
  readonly ban_reason: string;
}
