import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function start(): Promise<void> {
  const PORT = process.env.PORT || 5000;

  const app = await NestFactory.create(AppModule);

  app.listen(PORT, () => console.log(`${process.env.NODE_ENV} server has been started on ${PORT} port`));
}

start();
