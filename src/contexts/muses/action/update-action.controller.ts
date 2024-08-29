import { Body, Controller, Inject, Patch } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { recoverErrorType } from '@common/helpers/error-management';
import { MUSES_ACTION_ENDPOINT, MUSES_ACTION_UPDATE } from '@muses/action/constants';
import { CLIENT_PROXY_NAME } from '@muses/commons/constants';

@Controller(MUSES_ACTION_ENDPOINT)
export class UpdateActionController {
  constructor(
    @Inject(CLIENT_PROXY_NAME)
    private clientProxy: ClientProxy,
  ) {}

  @Patch()
  async update(@Body() input: unknown): Promise<unknown> {
    try {
      const output = await lastValueFrom(
        this.clientProxy.send({ cmd: MUSES_ACTION_UPDATE }, input),
      );

      return output;
    } catch (error) {
      throw recoverErrorType(error);
    }
  }
}
