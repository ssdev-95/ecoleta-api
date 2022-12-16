import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
const PORT = process.env['PORT'] ?? 2077

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

	app.useGlobalPipes(new ValidationPipe())

  await app.listen(PORT);
}
bootstrap();
