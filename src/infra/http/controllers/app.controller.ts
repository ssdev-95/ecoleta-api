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
  @Get('list/:city')
  list(@Param('city') city:string) {
    return this.retrieveCollectorPoint.findManyByCity(city)
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
