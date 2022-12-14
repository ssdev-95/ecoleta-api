import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { CollectorPoint } from './entity/point'

export const AppDataSource = new DataSource({
	type: 'better-sqlite3',
  database: __dirname + '/database/db.sqlite',
	synchronize: false,
  logging: false,
	entities: [CollectorPoint],
  migrations: [__dirname + '/migration/*'],
	subscribers: []
})
