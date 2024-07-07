import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'manager', description: 'type of role' })
  readonly type: string;

  @ApiProperty({ example: 'description of role', description: 'description' })
  readonly description: string;
}
