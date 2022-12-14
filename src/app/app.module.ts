import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { CollectorPoint } from '../infra/entity/point';
import { AppController } from './app.controller';

@Module({
  imports: [TypeOrmModule.forRoot({
		type: 'better-sqlite3',
		database: '../infra/database/db.sqlite',
		synchronize: false,
		logging: false,
		entities: [CollectorPoint],
		migrations: ['../infra/migration/*'],
		subscribers: []
	}), TypeOrmModule.forFeature([CollectorPoint])],
  controllers: [AppController],
  providers: [TypeOrmModule],
})
export class AppModule {
  constructor(private dataSource: DataSource) {
		this.dataSource.initialize()
	}
}
