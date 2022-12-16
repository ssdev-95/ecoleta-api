import {
	Controller, Body, Post, Get, Param
} from '@nestjs/common';

import {
	CreateCollectorPointBody
} from '../dtos/create-point-body';

import {
	CollectorPointRegister
} from '@application/use-case/registrate-collector-point';

import {
	CollectorPointRetriever
} from '@application/use-case/retrieve-collector-points';

@Controller('points')
export class AppController {
	constructor(
		private createCollectorPoint:CollectorPointRegister,
		private retrieveCollectorPoint:CollectorPointRetriever
	) { }

	@Get('Hello')
	getHello() {
		return 'Hello World'
	}

  @Get('list/:city')
  getManyByCity(@Param('city') city:string) {
    return this.retrieveCollectorPoint.findManyByCity(city)
	}

	@Get(':id')
	getById(@Param('id') id:string) {
		return this.retrieveCollectorPoint.findById(id)
	}

	@Post('new')
	async create(@Body() body:CreateCollectorPointBody) {
		const rawResponse = await this
		  .createCollectorPoint
			.register(body)

		return {
			success: !!Object.values(
				rawResponse.collectorPoint
			).length
		}
	}
}
