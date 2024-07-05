import { Module } from '@nestjs/common';
import { MusesClientNatsModule } from './muses-client-nats.module';

@Module({
  imports: [MusesClientNatsModule],
  exports: [],
})
export class MusesContext {}
