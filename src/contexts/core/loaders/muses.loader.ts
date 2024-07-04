import { MainLoader } from './main.loader';
import { MusesType } from '../env-var-map/muses/muses.type';
import { registerAs } from '@nestjs/config';

export const MusesLoader = registerAs(
  'muses',
  (): MusesType => MainLoader().muses,
);
