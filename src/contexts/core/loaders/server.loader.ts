import { MainLoader } from './main.loader';
import { ServerType } from '../env-var-map/server/server.type';
import { registerAs } from '@nestjs/config';

export const ServerLoader = registerAs(
  'server',
  (): ServerType => MainLoader().server,
);
