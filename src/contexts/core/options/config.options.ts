import { ConfigModuleOptions } from '@nestjs/config';
import { ConfigSchema } from '../schemas/config.schema';
import { MusesLoader } from '../loaders/muses.loader';
import { ServerLoader } from '../loaders/server.loader';

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
