import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles'; // по этому ключю будем получать метаданные

export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles); // декоратор
