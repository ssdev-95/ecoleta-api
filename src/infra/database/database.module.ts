import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
	options as DataSourceOptions
} from './typeorm/data-source';

import {
	FirebaseService
} from './firebase/firebase.service';

import { TypeormService } from './typeorm/typeorm.service';
import { CollectorPoint } from './typeorm/entity/point';

@Module({
	imports: [
		TypeOrmModule.forRoot(DataSourceOptions),
		TypeOrmModule.forFeature([CollectorPoint])
	],
	providers: [TypeormService, FirebaseService],
	exports: [TypeormService, FirebaseService]
})
export class DatabaseModule {}
