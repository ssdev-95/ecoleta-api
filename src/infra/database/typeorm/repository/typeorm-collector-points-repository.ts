import {
	CollectorPoint as CollectorPointEntity
} from '../entity/point';

import {
	CollectorPoint
} from '../../../../app/entity/collector-point';

import { TypeormService } from '../typeorm.service';

import {
	CollectorPointsRepository
} from '../../../../app/repositories/collector-points-repository';

export class TypeormCollectorPointsRepository implements CollectorPointsRepository {
	constructor(
		private typeormService: TypeormService
	) {}

	async create(collectorPoint: CollectorPoint) {
		console.log(this
		  .typeormService
			.dataSource
			.getRepository(CollectorPointEntity)
			.create(collectorPoint))
  }
}
