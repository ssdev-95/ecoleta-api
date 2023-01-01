import { Module } from '@nestjs/common';

import {
	DatabaseModule
} from '../database/database.module';

import {
	AppController
} from './controllers/app.controller';

import {
	CollectorPointRegister
} from '@application/use-case/registrate-collector-point';

import {
	CollectorPointsRepository
} from '@application/repositories/collector-points-repository';

import {
	TypeormCollectorPointsRepository
} from '../database/typeorm/repository/typeorm-collector-points-repository';

import {
	CollectorPointRetriever
} from '@application/use-case/retrieve-collector-points';

@Module({
	imports: [DatabaseModule],
	providers: [
		{
			provide:  CollectorPointsRepository,
			useClass: TypeormCollectorPointsRepository
		},
		CollectorPointRegister,
		CollectorPointRetriever
	],
	controllers: [AppController]
})
export class HTTPModule {
}
