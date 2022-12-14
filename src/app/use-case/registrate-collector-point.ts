import { Injectable } from '@nestjs/common';
import { CollectorPoint } from '../entity/collector-point';

import {
	CollectorPointsRepository
} from '../repositories/collector-points-repository';

interface RegistryCollectorProps {
	name: string
	email: string
	whatsapp: number
	street: number
	city: string
	uf: string
	coords: string
	picture: string
}

interface RegistryCollectorResponse {
	collectorPoint: CollectorPoint
}

@Injectable()
export class CollectorPointRegister {
	constructor(
		private collectorPointsRepository: CollectorPointsRepository
	) { }

	async register(request:RegistryCollectorProps):Promise<RegistryCollectorResponse> {
		const collectorPoint = new CollectorPoint(request);

		await this
		  .collectorPointsRepository
			.create(collectorPoint)

		return { collectorPoint }
	}
}
