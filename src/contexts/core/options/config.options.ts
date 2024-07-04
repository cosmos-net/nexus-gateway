import { ConfigModuleOptions } from '@nestjs/config';
import { ConfigSchema } from '@core/schemas/config.schema';
import { MusesLoader } from '@core/loaders/muses.loader';
import { ServerLoader } from '@core/loaders/server.loader';

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
