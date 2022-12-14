import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { CollectorPoint } from '../../infra/entity/point';

@Injectable()
export class TypeORMService {
	constructor(private readonly datasource: DataSource) { }
	async getPointsCount() {
		return await this.datasource.getRepository(CollectorPoint).count()
	}
}
