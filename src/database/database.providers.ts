import { Sequelize } from 'sequelize-typescript';
import { User } from '../users/repository/users.model';
import { Role } from 'src/roles/repository/roles.model';
import { UserRole } from 'src/roles/repository/user-roles.model';
import { Post } from 'src/posts/repository/posts.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    autoLoadmodels: true,
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USERNAME,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
      });
      sequelize.addModels([User, Role, UserRole, Post]);
      await sequelize.sync({ force: false });
      return sequelize;
    },
  },
];
