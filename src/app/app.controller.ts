import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/hello')
  greeting() {
    return 'Hello boys and girls';
	}
}
