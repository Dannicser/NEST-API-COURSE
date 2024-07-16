import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';
import { CreatePostDto } from 'src/posts/dto/create-post.dto';

@Injectable()
export class FilesService {
  public createFile(dto: CreatePostDto, file) {
    try {
      const fileName = uuid.v4() + '.jpg';
      const filePath = path.resolve(__dirname, '..', 'static');

      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }

      fs.writeFileSync(path.join(filePath, fileName), file.buffer);

      return fileName;
    } catch (error) {
      throw new HttpException(
        {
          message: 'the file has been saved',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
