import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { AppDataSource } from './data-source';

@Injectable()
export class TypeormService {
	private _dataSource:DataSource = AppDataSource

	public get dataSource() {
		return this._dataSource
	}
}
