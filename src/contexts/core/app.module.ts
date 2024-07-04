import { CerberusContext } from '@cerberus/cerberus.context';
import { ConfigModule } from '@core/common-main.module';
import { HadesContext } from '@hades/hades.context';
import { HealthContext } from '@health/health.context';
import { MainConfigOptions } from '@core/options/config.options';
import { Module } from '@nestjs/common';
import { MusesContext } from '@muses/muses.context';

@Module({
  imports: [
    CerberusContext,
    HadesContext,
    MusesContext,
    HealthContext,
    ConfigModule.forRoot(MainConfigOptions),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
