import { ClientsModule, Transport } from '@nestjs/microservices';

export const MusesClientNatsModule = ClientsModule.register([
  {
    name: 'NATS_SERVICE',
    transport: Transport.NATS,
    options: {
      servers: [`${process.env.MUSES_PROXY_URL}`],
    },
  },
]);
