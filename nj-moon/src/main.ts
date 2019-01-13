import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ApiParamsValidationPipe } from './common/pipes/api-params-validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ApiParamsValidationPipe());
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('nj-moon')
    .setDescription('The nj-moon API description')
    .setVersion('1.0')
    .addTag('nj-moon')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
}
bootstrap();
