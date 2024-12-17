import { ConfigModuleOptions } from '@nestjs/config';

import { musesLoader } from '@core/loaders/muses.loader';
import { serverLoader } from '@core/loaders/server.loader';
import { configSchema } from '@core/schemas/config.schema';

export const mainConfigOptions: ConfigModuleOptions = {
  cache: true,
  isGlobal: true,
  load: [serverLoader, musesLoader],
  validationSchema: configSchema,
  validationOptions: {
    allowUnknown: true,
    abortEarly: true,
  },
  envFilePath: '.env',
};
