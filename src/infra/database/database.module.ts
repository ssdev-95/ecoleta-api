import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { options } from './typeorm/data-source';

import {
	FirebaseService
} from './firebase/firebase.service';

import { TypeormService } from './typeorm/typeorm.service';
import { CollectorPoint } from './typeorm/entity/point';

@Module({
	imports: [
		TypeOrmModule.forRoot(options),
		TypeOrmModule.forFeature([CollectorPoint])
	],
	providers: [TypeormService, FirebaseService],
	exports: [TypeormService, FirebaseService]
})
export class DatabaseModule {}
