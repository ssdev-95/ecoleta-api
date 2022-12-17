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

import {
	CollectorPointMapper
} from '@infra/database/typeorm/mappers/typeorm-collector-point-mapper';

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
  async getManyByCity(@Param('city') city:string) {
    const collectors = await this
		  .retrieveCollectorPoint
			.findManyByCity(city)

		return collectors.map(CollectorPointMapper.toTypeORM)
	}

	@Get(':id')
	async getById(@Param('id') id:string) {
		const collector = await this
		  .retrieveCollectorPoint
			.findById(id)

		return CollectorPointMapper.toTypeORM(collector)
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
