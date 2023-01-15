import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { json } from 'express';

import { AppModule } from './app/app.module';
const PORT = process.env['PORT'] ?? 2077

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
		cors: { origin: '*' }
	});

	app.useGlobalPipes(new ValidationPipe())
	app.use(json({ limit:'50mb' }))

  await app.listen(PORT);
}

bootstrap();
