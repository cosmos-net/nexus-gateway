import { registerAs } from '@nestjs/config';

import { IServerType } from '@core/env-var-map/server/server.type';
import { mainLoader } from '@core/loaders/main.loader';

export const serverLoader = registerAs('server', (): IServerType => mainLoader().server);
