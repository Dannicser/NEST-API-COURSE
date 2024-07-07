import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model } from 'sequelize-typescript';

// it needs for record createation
interface IUserCreationAttrs {
  email: string;
  password: string;
}

@Table({
  tableName: 'users',
})
export class User extends Model<User, IUserCreationAttrs> {
  @ApiProperty({ example: 1, description: 'unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'email@mail.ru', description: 'unique email' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: 'qwerty', description: 'password' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({ example: 'true', description: 'whether banned or not' })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_banned: boolean;

  @ApiProperty({ example: 'cheating', description: 'reason for ban' })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  ban_reason: string;
}
