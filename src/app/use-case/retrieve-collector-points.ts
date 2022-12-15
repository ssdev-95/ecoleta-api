import { Injectable } from '@nestjs/common';

import {
	CollectorPointsRepository
} from '@application/repositories/collector-points-repository';

@Injectable()
export class CollectorPointRetriever {
	constructor(
		private collectorPointsRepository: CollectorPointsRepository
	) { }

	async findManyByCity(city:string) {
		const rawResponse = await this
		  .collectorPointsRepository
			.findManyByCity(city)
	  
		return rawResponse
	}

	async findById(id:string) {
		const rawResponse = await this
		  .collectorPointsRepository
			.findById(id)

		return rawResponse
	}
}
