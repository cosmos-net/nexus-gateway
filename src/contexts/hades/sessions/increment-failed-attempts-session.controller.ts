import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { recoverErrorType } from '@common/helpers/error-management';
import { COMMANDS_HADES, HADES_CLIENT_CONTEXT_PROXY_NAME } from '@hades/commons/commands-name';
import { HADES_SESSION_ENDPOINT } from '@hades/commons/end-points';

@Controller(HADES_SESSION_ENDPOINT)
export class IncrementFailedAttemptsSessionController {
  constructor(
    @Inject(HADES_CLIENT_CONTEXT_PROXY_NAME)
    private readonly clientProxy: ClientProxy,
  ) {}

  @Post('increment-failed-attempts')
  async create(@Body() input: unknown): Promise<unknown> {
    try {
      const output = await lastValueFrom(
        this.clientProxy.send({ cmd: COMMANDS_HADES.SESSION.INCREMENT_FAILED_ATTEMPTS }, input),
      );

      return output;
    } catch (error) {
      throw recoverErrorType(error);
    }
  }
}
