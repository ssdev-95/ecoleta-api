import { DataSourceOptions } from 'typeorm';
import * as path from 'node:path';

import {
	CollectorPoint
} from '../entity/point';

import {
	bootstrapPointsTable1671149742441 as Migration
} from '../migration/1671149742441-bootstrap-points-table';

const baseConfig = {
	synchronize: false,
	logging: false,
	migrationsRun: false,
	entities: [CollectorPoint],
	migrations: [Migration],
	subscribers: []
}

export const prodConfig:DataSourceOptions = {
	type: 'mysql',
	host: 'config.host',
	port: 3307,
	username: 'config.username',
	password: 'config.password',
	database: 'config.database',
	...baseConfig
}

const databasePath = path.resolve(
	process.cwd(),
	'src/infra/database/typeorm',
	'db.sqlite'
)

export const devConfig:DataSourceOptions = {
	type: 'better-sqlite3',
	database: databasePath,
	...baseConfig
}

//const isProdMode = process.env.NODE_ENV === 'production'
