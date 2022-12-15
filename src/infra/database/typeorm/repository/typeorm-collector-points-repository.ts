import { Injectable } from '@nestjs/common';

import {
	CollectorPoint as CollectorPointEntity
} from '../entity/point';

import {
	CollectorPoint
} from '@application/entity/collector-point';

import { TypeormService } from '../typeorm.service';

import {
	CollectorPointsRepository
} from '@application/repositories/collector-points-repository';

import {
	CollectorPointMapper
} from '../mappers/typeorm-collector-point-mapper'

@Injectable()
export class TypeormCollectorPointsRepository implements CollectorPointsRepository {
	constructor(
		private typeormService: TypeormService
	) {}

	async create(collectorPoint: CollectorPoint) {
		const raw = CollectorPointMapper
		  .toTypeORM(collectorPoint)

		await this
		  .typeormService
			.dataSource
			.getRepository(CollectorPointEntity)
			.create(raw)
			.save()
  }

	async findManyByCity(city: string) {
		const rawResponse = await this
		  .typeormService
			.dataSource
			.getRepository(CollectorPointEntity)
			.find({
				where: {
					city
				}
			})

		const collectors = rawResponse
		  .map(CollectorPointMapper.toDomain)

		return collectors
	}

	async findById(id: string) {
		const rawResponse = await this
		  .typeormService
			.dataSource
			.getRepository(CollectorPointEntity)
			.findOneOrFail({
				where: { id	}
			})

		const collector = CollectorPointMapper
		  .toDomain(rawResponse)

		return collector
	}
}
