import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
	options as DataSourceOptions
} from './typeorm/data-source';

import { TypeormService } from './typeorm/typeorm.service';
import { CollectorPoint } from './typeorm/entity/point';

@Module({
	imports: [
		TypeOrmModule.forRoot(DataSourceOptions),
		TypeOrmModule.forFeature([CollectorPoint])
	],
	providers: [TypeormService],
	exports: [TypeormService]
})
export class DatabaseModule {}
