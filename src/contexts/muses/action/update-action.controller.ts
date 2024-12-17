import { Body, Controller, Inject, Patch } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { recoverErrorType } from '@common/helpers/error-management';
import { COMMANDS_MUSES, MUSES_CLIENT_CONTEXT_PROXY_NAME } from '@muses/commons/commands-name';
import { MUSES_ACTION_ENDPOINT } from '@muses/commons/end-points';

@Controller(MUSES_ACTION_ENDPOINT)
export class UpdateActionController {
  constructor(
    @Inject(MUSES_CLIENT_CONTEXT_PROXY_NAME)
    private readonly clientProxy: ClientProxy,
  ) {}

  @Patch()
  async update(@Body() input: unknown): Promise<unknown> {
    try {
      const output = await lastValueFrom(
        this.clientProxy.send({ cmd: COMMANDS_MUSES.ACTION.UPDATE }, input),
      );

      return output;
    } catch (error) {
      throw recoverErrorType(error);
    }
  }
}
