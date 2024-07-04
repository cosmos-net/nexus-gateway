import { MusesType } from './muses/muses.type';
import { ServerType } from './server/server.type';

export type EnvVarMapMainType = {
  readonly server: ServerType;
  readonly muses: MusesType;
};
