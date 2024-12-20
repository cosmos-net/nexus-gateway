import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from '@core/app.module';
import { IMusesType } from '@core/env-var-map/muses/muses.type';
import { IServerType } from '@core/env-var-map/server/server.type';
import { HttpExceptionFilter } from '@core/globals/global-filters/http-exception.filter';
import { TransformInterceptor } from '@core/globals/global-interceptors/transform.interceptor';
import { ValidationPipeWithExceptionFactory } from '@core/globals/global-pipes/validation.pipe';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const server = configService.get<IServerType>('server');
  const muses = configService.get<IMusesType>('muses');

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

  await app.listen(port, () => Logger.log(`Running on port ${port}`, server.name));
}

bootstrap();
