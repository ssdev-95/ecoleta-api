import { Module } from '@nestjs/common';
import { HTTPModule } from '../infra/http/http.module';

import {
	DatabaseModule
} from '../infra/database/database.module'

@Module({
  imports: [
	  DatabaseModule,
		HTTPModule
	]
})
export class AppModule {
}
