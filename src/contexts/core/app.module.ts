import { ConfigModule } from './common-main.module';
import { MainConfigOptions } from './options/config.options';
import { Module } from '@nestjs/common';

@Module({
  imports: [ConfigModule.forRoot(MainConfigOptions)],
  controllers: [],
  providers: [],
})
export class AppModule {}
