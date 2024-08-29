import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { recoverErrorType } from '@common/helpers/error-management';
import { MUSES_ACTION_ENDPOINT, MUSES_ACTION_LIST } from '@muses/action/constants';
import { CLIENT_PROXY_NAME } from '@muses/commons/constants';

@Controller(MUSES_ACTION_ENDPOINT)
export class ListActionController {
  constructor(
    @Inject(CLIENT_PROXY_NAME)
    private clientProxy: ClientProxy,
  ) {}

  @Get('list')
  async list(@Query() input: unknown): Promise<unknown> {
    try {
      const output = await lastValueFrom(this.clientProxy.send({ cmd: MUSES_ACTION_LIST }, input));

      return output;
    } catch (error) {
      throw recoverErrorType(error);
    }
  }
}
