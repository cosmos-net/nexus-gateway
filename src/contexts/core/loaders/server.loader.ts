import { registerAs } from '@nestjs/config';

import { ServerType } from '@core/env-var-map/server/server.type';
import { MainLoader } from '@core/loaders/main.loader';

export const ServerLoader = registerAs('server', (): ServerType => MainLoader().server);
