import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BanUserDto } from './dto/ban-user.dto';
import { UsersService } from './users.service';
import { UnbanUserDto } from './dto/unban-user.dto';

@Injectable()
export class UsersBanService {
  constructor(private readonly userService: UsersService) {}

  public async banUser(banDto: BanUserDto): Promise<BanUserDto> {
    const user = await this.userService.getUserById(banDto.userId);

    if (!user) {
      throw new HttpException({ message: 'user has not been found' }, HttpStatus.NOT_FOUND);
    }

    user.is_banned = true;
    user.ban_reason = banDto.ban_reason;

    user.save();

    return banDto;
  }

  public async unbanUser(banDto: UnbanUserDto): Promise<UnbanUserDto> {
    const user = await this.userService.getUserById(banDto.userId);

    if (!user) {
      throw new HttpException({ message: 'user has not been found' }, HttpStatus.NOT_FOUND);
    }

    user.is_banned = false;
    user.ban_reason = null;

    user.save();

    return banDto;
  }
}
