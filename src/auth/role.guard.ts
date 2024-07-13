import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { ROLES_KEY } from './role.decorator';
import { Role } from 'src/roles/repository/roles.model';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
  ) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const request = context.switchToHttp().getRequest();

      // получение массива ролей, которые мы прокинули в контроллерах
      const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);

      // если requiredRoles пусто, то пропускаем
      if (!requiredRoles) {
        return true;
      }

      const bearer = request.headers.authorization.split(' ')[0];
      const token = request.headers.authorization.split(' ')[1];

      if (!bearer || !token) {
        throw new UnauthorizedException({
          message: 'unauthorized user',
        });
      }

      const user = this.jwtService.verify(token);

      request.user = user;

      return user.roles.some((role: Role) => requiredRoles.includes(role.type)); // все ли роли необходимые для этого эндроинта есть у юзера?
    } catch (error) {
      throw new UnauthorizedException({
        message: 'unauthorized user',
      });
    }
  }
}
