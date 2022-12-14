import {
	CollectorPoint
} from '../../src/app/entity/collector-point';

import {
	CollectorPointsRepository
} from '../../src/app/repositories/collector-points-repository';

export class InMemmoryCollectorPointsRepository
  implements CollectorPointsRepository
{
	public collectors:CollectorPoint[] = []

	async create(collector: CollectorPoint) {
		this.collectors.push(collector)
	}
}
