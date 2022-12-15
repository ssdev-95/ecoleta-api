import {
	CollectorPoint
} from '@application/entity/collector-point';

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
			coords: collector.coords,

			picture: collector.picture
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
			coords: raw.coords,
			picture: raw.picture
		}, raw.id)
	}
}
