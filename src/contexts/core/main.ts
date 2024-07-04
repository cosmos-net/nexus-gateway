import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { HttpExceptionFilter } from './globals/global-filters/http-exception.filter';
import { MusesType } from './env-var-map/muses/muses.type';
import { NestFactory } from '@nestjs/core';
import { ServerType } from './env-var-map/server/server.type';
import { TransformInterceptor } from './globals/global-interceptors/transform.interceptor';
import { ValidationPipeWithExceptionFactory } from './globals/global-pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const server = configService.get<ServerType>('server');
  const muses = configService.get<MusesType>('muses');

  if (!server) {
    throw new Error('Server configuration is missing');
  }

  if (!muses) {
    throw new Error('Muses configuration is missing');
  }

  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter(configService));
  app.setGlobalPrefix('api/');
  app.useGlobalPipes(
    new ValidationPipeWithExceptionFactory(),
    new ValidationPipe({ forbidUnknownValues: true }),
  );

  const originMuses =
    server.host === 'localhost'
      ? `${muses.protocol}://${muses.host}:${muses.port}`
      : `${muses.protocol}://${muses.host}`;

  app.enableCors({
    origin: originMuses,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  const port = server.port;

  await app.listen(port, () =>
    Logger.log(`Running on port ${port}`, server.name),
  );
}

bootstrap();
