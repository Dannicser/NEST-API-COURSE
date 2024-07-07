import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { User } from 'src/users/repository/users.model';
import { UserRole } from './user-roles.model';

interface IRoleAttrs {
  type: string;
  description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, IRoleAttrs> {
  @ApiProperty({ example: 1, description: 'unique id' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'lawer', description: 'type of role' })
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  type: string;

  @ApiProperty({ example: 'manager', description: 'description of manager role' })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @BelongsToMany(() => User, () => UserRole) // с какой сущностью связываем и через какую таблицу
  users: User[];
}
