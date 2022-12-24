import {
	CollectorPoint
} from '@application/entity/collector-point';

import {
	CollectorPointsRepository, Selectors
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

	async getSelectors() {
		const selectors = this.collectors.reduce((acc, curr) => {
			acc.city = [...acc.city, curr.city]
			acc.uf = [...acc.uf, curr.uf]
			return acc
		}, { uf:[],city:[] } as Selectors)

		return selectors
	}
}
