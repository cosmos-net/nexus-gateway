import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { recoverErrorType } from '@common/helpers/error-management';
import { MUSES_ACTION_ENDPOINT, MUSES_ACTION_GET } from '@muses/action/constants';
import { CLIENT_PROXY_NAME } from '@muses/commons/constants';

@Controller(MUSES_ACTION_ENDPOINT)
export class GetActionController {
  constructor(
    @Inject(CLIENT_PROXY_NAME)
    private clientProxy: ClientProxy,
  ) {}

  @Get('/:id')
  async get(@Param() input: unknown): Promise<unknown> {
    try {
      const output = await lastValueFrom(this.clientProxy.send({ cmd: MUSES_ACTION_GET }, input));

      return output;
    } catch (error) {
      throw recoverErrorType(error);
    }
  }
}
