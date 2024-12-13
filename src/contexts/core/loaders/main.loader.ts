import { IEnvVarMapMainType } from '@core/env-var-map/main.type';

export const mainLoader = (): IEnvVarMapMainType => ({
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 4999,
    host: process.env.HOST || '',
    name: process.env.NAME || '',
    env: process.env.ENV || '',
  },
  muses: {
    port: process.env.MUSES_PORT ? parseInt(process.env.MUSES_PORT, 10) : 4200,
    host: process.env.MUSES_HOST || '',
    name: process.env.MUSES_NAME || '',
    protocol: process.env.MUSES_PROTOCOL || '',
    proxyURL: process.env.MUSES_PROXY_URL || '',
  },
});
