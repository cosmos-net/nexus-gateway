import { ConfigModuleOptions } from '@nestjs/config';

import { MusesLoader } from '@core/loaders/muses.loader';
import { ServerLoader } from '@core/loaders/server.loader';
import { ConfigSchema } from '@core/schemas/config.schema';

export const MainConfigOptions: ConfigModuleOptions = {
  cache: true,
  isGlobal: true,
  load: [ServerLoader, MusesLoader],
  validationSchema: ConfigSchema,
  validationOptions: {
    allowUnknown: true,
    abortEarly: true,
  },
  envFilePath: '.env',
};
