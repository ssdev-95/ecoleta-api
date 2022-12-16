import 'reflect-metadata'
import * as path from 'node:path'
import { DataSource, DataSourceOptions } from 'typeorm'

import { CollectorPoint } from './entity/point'
import {
	bootstrapPointsTable1671149742441 as Migration
} from './migration/1671149742441-bootstrap-points-table';

const databasePath = path.resolve(
	process.cwd(),
	'src/infra/database/typeorm',
	'db.sqlite'
)

export const options:DataSourceOptions = {
	type: 'better-sqlite3',
  database: databasePath,
	synchronize: false,
  logging: false,
	migrationsRun: false,
	entities: [CollectorPoint],
  migrations: [Migration],
	subscribers: []
}

export const AppDataSource = new DataSource(options)
