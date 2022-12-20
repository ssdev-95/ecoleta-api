import { Module } from '@nestjs/common';

import {
	DatabaseModule
} from '../database/database.module';

import {
	AppController
} from './controllers/app.controller';

import {
	UploadImageController
} from './controllers/upload-image.controller';

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
	FirebaseCollectorImageRepository
} from '../database/firebase/repositories/firebase-collector-image-repository';

import {
	CollectorPointRetriever
} from '@application/use-case/retrieve-collector-points';

import {
	UploadImage
} from '@application/use-case/upload-collector-image';

import {
	CollectorImageRespository
} from '@application/repositories/collector-image-repository';

@Module({
	imports: [DatabaseModule],
	providers: [
		{
			provide:  CollectorPointsRepository,
			useClass: TypeormCollectorPointsRepository
		},
		{
			provide: CollectorImageRespository,
			useClass: FirebaseCollectorImageRepository
		},
		CollectorPointRegister,
		CollectorPointRetriever,
		UploadImage
	],
	controllers: [AppController, UploadImageController],
	exports: [UploadImage]
})
export class HTTPModule {
}
