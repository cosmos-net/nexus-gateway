import { MusesType } from '@core/env-var-map/muses/muses.type';
import { ServerType } from '@core/env-var-map/server/server.type';

export type EnvVarMapMainType = {
  readonly server: ServerType;
  readonly muses: MusesType;
};
