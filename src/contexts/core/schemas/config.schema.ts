import Joi from 'joi';

import { EnvironmentEnum } from '@core/enums/environment.enum';

export const configSchema = Joi.object({
  HOST: Joi.string().required(),
  PORT: Joi.number().required(),
  NAME: Joi.string().required(),
  ENV: Joi.string().valid(...Object.values(EnvironmentEnum)),
  MUSES_PORT: Joi.number().required(),
  MUSES_HOST: Joi.string().required(),
  MUSES_NAME: Joi.string().required(),
  MUSES_PROTOCOL: Joi.string().required(),
  MUSES_PROXY_URL: Joi.string().required(),
});
