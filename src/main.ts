import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
      .setTitle('NestJS API with MongoDB and Docker Compose')
      .setVersion('1.0.14')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(7000).then(()=>{
    console.log('application is running on port 7000');
  });
}
bootstrap();
