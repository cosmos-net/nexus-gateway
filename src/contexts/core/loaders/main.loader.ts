import { EnvVarMapMainType } from '@core/env-var-map/main.type';

export const MainLoader = (): EnvVarMapMainType => ({
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 4999,
    host: process.env.HOST as string,
    name: process.env.NAME as string,
    env: process.env.ENV as string,
  },
  muses: {
    port: process.env.MUSES_PORT ? parseInt(process.env.MUSES_PORT, 10) : 4200,
    host: process.env.MUSES_HOST as string,
    name: process.env.MUSES_NAME as string,
    protocol: process.env.MUSES_PROTOCOL as string,
    proxyURL: process.env.MUSES_PROXY_URL as string,
  },
});
