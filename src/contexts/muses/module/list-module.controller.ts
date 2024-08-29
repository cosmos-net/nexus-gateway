import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { recoverErrorType } from '@common/helpers/error-management';
import { CLIENT_PROXY_NAME } from '@muses/commons/constants';
import { MUSES_MODULE_ENDPOINT, MUSES_MODULE_LIST } from '@muses/module/constants';

@Controller(MUSES_MODULE_ENDPOINT)
export class ListModuleController {
  constructor(
    @Inject(CLIENT_PROXY_NAME)
    private clientProxy: ClientProxy,
  ) {}

  @Get('list')
  async list(@Query() input: unknown): Promise<unknown> {
    try {
      const output = await lastValueFrom(this.clientProxy.send({ cmd: MUSES_MODULE_LIST }, input));

      return output;
    } catch (error) {
      throw recoverErrorType(error);
    }
  }
}
