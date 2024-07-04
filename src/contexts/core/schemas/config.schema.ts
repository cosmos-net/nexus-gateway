import * as Joi from 'joi';
import { EnvironmentEnum } from '../enums/environment.enum';

export const ConfigSchema = Joi.object({
  HOST: Joi.string().required(),
  PORT: Joi.number().required(),
  NAME: Joi.string().required(),
  ENV: Joi.string().valid(...Object.values(EnvironmentEnum)),
  MUSES_PORT: Joi.number().required(),
  MUSES_HOST: Joi.string().required(),
  MUSES_NAME: Joi.string().required(),
  MUSES_PROTOCOL: Joi.string().required(),
});
