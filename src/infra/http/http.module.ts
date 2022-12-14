import { Module } from '@nestjs/common';
//import { DataSource } from 'typeorm';

import { DatabaseModule } from '../database/database.module';

import {
	AppController
} from './controllers/app.controller';

import {
	CollectorPointRegister
} from '../../app/use-case/registrate-collector-point';

import {
	CollectorPointsRepository
} from '../../app/repositories/collector-points-repository';

import {
	TypeormCollectorPointsRepository
} from '../database/typeorm/repository/typeorm-collector-points-repository';

import {
	AppDataSource
} from '../database/typeorm/data-source';

@Module({
	imports: [DatabaseModule],
	providers: [
		{
			provide:  CollectorPointsRepository,
			useClass: TypeormCollectorPointsRepository
		},
		CollectorPointRegister
	],
	controllers: [AppController]
})
export class HTTPModule {
}
