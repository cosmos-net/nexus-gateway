import { registerAs } from '@nestjs/config';

import { MusesType } from '@core/env-var-map/muses/muses.type';
import { MainLoader } from '@core/loaders/main.loader';

export const MusesLoader = registerAs('muses', (): MusesType => MainLoader().muses);
