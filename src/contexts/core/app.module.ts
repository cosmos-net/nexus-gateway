import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { CerberusContext } from '@cerberus/cerberus.context';
import { ConfigModule } from '@core/common-main.module';
import { TransformDataBodyMiddleware } from '@core/middlewares/transform-data-body.middleware';
import { mainConfigOptions } from '@core/options/config.options';
import { HadesContext } from '@hades/hades.context';
import { HealthContext } from '@health/health.context';
import { MusesContext } from '@muses/muses.context';

@Module({
  imports: [
    CerberusContext,
    HadesContext,
    MusesContext,
    HealthContext,
    ConfigModule.forRoot(mainConfigOptions),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TransformDataBodyMiddleware).forRoutes('*');
  }
}
