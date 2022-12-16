import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';

import { AppDataSource } from './data-source';
import {CollectorPoint} from './entity/point';

@Injectable()
export class TypeormService extends Repository<CollectorPoint> {
	constructor() {
		super(CollectorPoint, new EntityManager(AppDataSource))

		AppDataSource.initialize().then(() => {
			console.info('[INFO] Database routines initialized.')
		})
	}
}
