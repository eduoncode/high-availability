import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RequestInterceptor } from './shared/interceptors/request.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('The endpoint documentation for API')
    .setVersion('1.0')
    .build();

  app.useGlobalInterceptors(new RequestInterceptor());
  const documentFactory = () => SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, documentFactory());

  await app.listen(process.env.PORT ?? 5050);
}
bootstrap();
