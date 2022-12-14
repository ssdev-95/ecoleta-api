import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

import { AppDataSource } from './infra/data-source';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
	await AppDataSource.initialize()
  await app.listen(3000);
}
bootstrap();
