import {
	Controller, Body, Post, Get
} from '@nestjs/common';

import {
	CreateCollectorPointBody
} from '../create-point-body';

import {
	CollectorPointRegister
} from '../../../app/use-case/registrate-collector-point';

@Controller('points')
export class AppController {
	constructor(
		private createCollectorPoint:CollectorPointRegister
	) { }
  @Get('list')
  list() {
    return 'Hello boys and girls';
	}

	@Post('new')
	async create(@Body() body:CreateCollectorPointBody) {
		return await this
		  .createCollectorPoint
			.register(body)
	}
}
