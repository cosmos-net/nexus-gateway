import { Module } from '@nestjs/common';
import { clientMusesNats } from './client-muses-nats.module';

@Module({
  imports: [clientMusesNats],
  exports: [],
})
export class MusesContext {}
