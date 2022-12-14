import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('points')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('count')
  getCount() {
    return this.appService.getCount();
  }
}
