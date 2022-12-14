import { Injectable } from '@nestjs/common';
import { TypeORMService } from './typeorm/typeorm.service';

@Injectable()
export class AppService {
	constructor(private readonly orm: TypeORMService) { }

  async getCount() {
    return this.orm.getPointsCount()
  }
}
