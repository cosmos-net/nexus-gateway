import { Body, Controller, Inject, Patch } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { recoverErrorType } from '@common/helpers/error-management';
import { HADES_CLIENT_CONTEXT_PROXY_NAME, COMMANDS_HADES } from '@hades/commons/commands-name';
import { HADES_SESSION_ENDPOINT } from '@hades/commons/end-points';

@Controller(HADES_SESSION_ENDPOINT)
export class TransitionStatusSessionController {
  constructor(
    @Inject(HADES_CLIENT_CONTEXT_PROXY_NAME)
    private readonly clientProxy: ClientProxy,
  ) {}

  @Patch('transition-status')
  async update(@Body() input: unknown): Promise<unknown> {
    try {
      const output = await lastValueFrom(
        this.clientProxy.send({ cmd: COMMANDS_HADES.SESSION.UPDATE }, input),
      );

      return output;
    } catch (error) {
      throw recoverErrorType(error);
    }
  }
}
