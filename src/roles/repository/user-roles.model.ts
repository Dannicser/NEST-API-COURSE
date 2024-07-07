import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';

import { User } from 'src/users/repository/users.model';
import { Role } from './roles.model';

@Table({ tableName: 'user-roles', createdAt: false, updatedAt: false })
export class UserRole extends Model<UserRole> {
  @ApiProperty({ example: 1, description: 'unique id' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Role) // на какую таблицу ссылается
  @ApiProperty({ example: 1, description: 'id of the role' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  role_id: number;

  @ForeignKey(() => User) // на какую таблицу ссылается
  @ApiProperty({ example: 2, description: 'id of the user' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  user_id: number;
}
