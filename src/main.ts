import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start(): Promise<void> {
  const PORT = process.env.PORT || 5000;

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');

  const config = new DocumentBuilder().setTitle('api-nest-js').setDescription('documentation rest api').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  app.listen(PORT, () => console.log(`${process.env.NODE_ENV} server has been started on ${PORT} port`));
}

start();
