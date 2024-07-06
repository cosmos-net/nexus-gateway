import { Module } from '@nestjs/common';
import { MusesClientNatsModule } from '@muses/muses-client-nats.module';
import { EcosystemController } from '@muses/ecosystem/ecosystem.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), MusesClientNatsModule],
  controllers: [EcosystemController],
  exports: [],
})
export class MusesContext {}
