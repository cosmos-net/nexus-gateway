import { MainLoader } from '@core/loaders/main.loader';
import { MusesType } from '@core/env-var-map/muses/muses.type';
import { registerAs } from '@nestjs/config';

export const MusesLoader = registerAs(
  'muses',
  (): MusesType => MainLoader().muses,
);
