import { UserRole } from './user-roles.model';

export const userRolesProviders = [
  {
    provide: 'USER_ROLE_REPOSITORY',
    useValue: UserRole,
  },
];
