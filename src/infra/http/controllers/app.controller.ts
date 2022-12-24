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
	async getHello() {
		const seedCollector:CreateCollectorPointBody = {
			name:'Ecoleta - Zumbi dos Palmares',
			city:'Bunzaninho',
			uf:'FFXII',
			street:'Rocket St., 234',
			coords:[-3.1037625, -60.0241406],
			email:'siri_cutico@ecoleta.dev',
			whatsapp: 11994839988,
			picture:'https://firebasestorage.googleapis.com/v0/b/ecoleta-3718e.appspot.com/o/image_1890e444-696b-40b2-9860-277e58c3b22a20221222_093946.jpg?alt=media&token=fe21cc86-6b23-4102-b78b-b6333a2b6acd',
			categories: ['salaminho']
		}

		await this
		  .createCollectorPoint
			.register(seedCollector)

		return 'Hello World'
	}

	@Get('get-selectors')
	async getSelectors() {
		return await this
		  .retrieveCollectorPoint
			.getSelectors()
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
