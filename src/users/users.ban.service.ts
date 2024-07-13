import { Injectable } from '@nestjs/common';
import { BanUserDto } from './dto/ban-user.dto';

@Injectable()
export class UsersBanService {
  public async banUser(banDto: BanUserDto) {}
}
