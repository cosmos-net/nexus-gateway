import { IMusesType } from '@core/env-var-map/muses/muses.type';
import { IServerType } from '@core/env-var-map/server/server.type';

export interface IEnvVarMapMainType {
  readonly server: IServerType;
  readonly muses: IMusesType;
}
