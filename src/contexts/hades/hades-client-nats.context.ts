import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { HADES_CLIENT_CONTEXT_PROXY_NAME } from '@hades/commons/commands-name';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ClientsModule.register([
      {
        name: HADES_CLIENT_CONTEXT_PROXY_NAME,
        transport: Transport.NATS,
        options: {
          servers: ['nats://localhost:4223'],
        },
      },
    ]),
  ],
  exports: [
    ClientsModule.register([
      {
        name: HADES_CLIENT_CONTEXT_PROXY_NAME,
        transport: Transport.NATS,
        options: {
          servers: ['nats://localhost:4223'],
        },
      },
    ]),
  ],
})
export class HadesClientNatsModule {}
