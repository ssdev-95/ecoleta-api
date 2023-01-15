import {
	CollectorPoint
} from '@application/entity/collector-point';

import {
	Selectors
} from '@application/repositories/collector-points-repository';

import {
	CollectorPoint as CollectorPointEntity
} from '../entity/point';

export class CollectorPointMapper {
	static toTypeORM(collector: CollectorPoint) {
		return {
			id: collector.id,
			name: collector.name,
			email: collector.email,
			whatsapp: collector.whatsapp,

			street: collector.street,
			city: collector.city,
			uf: collector.uf,
			coords: collector.coords.join(','),

			picture: collector.picture,
			categories: collector.categories.join(',')
		}
	}

	static toDomain(raw: CollectorPointEntity) {
		 return new CollectorPoint({
			name: raw.name,
			email: raw.email,
			whatsapp: raw.whatsapp,

			street: raw.street,
			city: raw.city,
			uf: raw.uf,
			coords: raw.coords.split(',').map(Number),

			picture: raw.picture,
			categories: raw.categories.split(',')
		}, raw.id)
	}

	static toSelectors(raw:CollectorPointEntity[]) {
		const { uf, city } = raw.reduce((acc, curr) => {
			acc.city = [...acc.city, curr.city]
			acc.uf = [...acc.uf, curr.uf]
			return acc
		}, { uf:[],city:[] } as Selectors)

		return {
			uf: [...(new Set(uf))],
			city: [...(new Set(city))]
		}
	}
}
