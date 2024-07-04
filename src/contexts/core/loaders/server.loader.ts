import { MainLoader } from '@core/loaders/main.loader';
import { ServerType } from '@core/env-var-map/server/server.type';
import { registerAs } from '@nestjs/config';

export const ServerLoader = registerAs(
  'server',
  (): ServerType => MainLoader().server,
);
