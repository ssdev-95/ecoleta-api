import 'reflect-metadata'
import 'dotenv/config'

import { DataSource } from 'typeorm'
import { prodConfig, devConfig } from './config'

export const options = process.env.NODE_ENV === 'production' ? prodConfig : devConfig

export const AppDataSource = new DataSource(options)
