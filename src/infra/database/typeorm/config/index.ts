import { DataSourceOptions } from 'typeorm';
import * as path from 'node:path';

import {
	CollectorPoint
} from '../entity/point';

import {
	bootstrapPointsTable1671149742441 as Migration0
} from '../migration/1671149742441-bootstrap-points-table';

import {
	alterPointsTableFields1671891171936 as Migration1
} from '../migration/1671891171936-alter-points-table-fields';

const baseConfig = {
	synchronize: false,
	logging: false,
	migrationsRun: false,
	entities: [CollectorPoint],
	migrations: [Migration0, Migration1],
	subscribers: []
}

export const prodConfig:DataSourceOptions = {
	type: 'postgres',
	//host: process.env.DB_HOST,
	url: process.env.DB_URL,
	//port: parseInt(process.env.DB_PORT ?? '3306'),
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
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
