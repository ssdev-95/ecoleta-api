import {
	CollectorPoint
} from '@application/entity/collector-point';

import {
	CollectorPointsRepository
} from '@application/repositories/collector-points-repository';

export class InMemmoryCollectorPointsRepository
  implements CollectorPointsRepository
{
	public collectors:CollectorPoint[] = []

	async create(collector: CollectorPoint) {
		this.collectors.push(collector)
	}

	async findManyByCity(city: string): Promise<CollectorPoint[]> {
		return this.collectors.filter(point => point.city === city)
	}

	async findById(id: string){
		const collector = this
		  .collectors
			.find((item)=>item.id === id)

		if(!collector) {
			throw Error('Cant\'t find collector point for given id')
		}

		return collector
	}
}
