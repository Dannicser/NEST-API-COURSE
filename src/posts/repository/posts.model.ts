import { Column, DataType, Model, Table, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { User } from 'src/users/repository/users.model';

// типизация для методов sequelize в репозитории
interface IPostsAttrb {
  title: string;
  content: string;
  userId: number;
  img: string;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, IPostsAttrb> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING, allowNull: false })
  content: string;

  @Column({ type: DataType.STRING, allowNull: false })
  img: string;

  @ForeignKey(() => User) // на какую модель ссылается
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
