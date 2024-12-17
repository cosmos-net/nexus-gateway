import { registerAs } from '@nestjs/config';

import { IMusesType } from '@core/env-var-map/muses/muses.type';
import { mainLoader } from '@core/loaders/main.loader';

export const musesLoader = registerAs('muses', (): IMusesType => mainLoader().muses);
