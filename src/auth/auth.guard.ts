import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

// также можно повесить глобальный guard для всего приложения

@Injectable() // не забывай для инжекта
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    try {
      const bearer = request.headers.authorization.split(' ')[0];
      const token = request.headers.authorization.split(' ')[1];

      if (!bearer || !token) {
        throw new UnauthorizedException({
          message: 'unauthorized user',
        });
      }

      const user = this.jwtService.verify(token);

      request.user = user;

      return true; // когда возвращает true доступ разрешенен, когда false доступ запрещен
    } catch (error) {
      throw new UnauthorizedException({
        message: 'unauthorized user',
      });
    }
  }
}
