/*describe('Application', () => {
	it('should return "Hello World!"', async () => {
		expect('Hello World!').toBe('Hello World!');
  });
});*/

import { Test, TestingModule } from '@nestjs/testing';
import { HTTPModule } from '../http.module';

import {
	DatabaseModule
} from '../../database/database.module';

import { AppController } from './app.controller';

describe('AppController', () => {
	let appController: AppController;

	beforeEach(async () => {
		const app: TestingModule = await Test
		  .createTestingModule({
				imports: [
					HTTPModule,
					DatabaseModule
				]
			}).compile();

			appController = app.get<AppController>(AppController);
	});

	describe('root', () => {
		it('should return "Hello World!"', () => {
			expect(appController.getHello()).toBe('Hello World!');
		});
	});
});
