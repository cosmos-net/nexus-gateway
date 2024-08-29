import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { recoverErrorType } from '@common/helpers/error-management';
import { CLIENT_PROXY_NAME } from '@muses/commons/constants';
import { MUSES_SUB_MODULE_ENDPOINT, MUSES_SUB_MODULE_GET } from '@muses/sub-module/constants';

@Controller(MUSES_SUB_MODULE_ENDPOINT)
export class GetSubModuleController {
  constructor(
    @Inject(CLIENT_PROXY_NAME)
    private clientProxy: ClientProxy,
  ) {}

  @Get('/:id')
  async get(@Param() input: unknown): Promise<unknown> {
    try {
      const output = await lastValueFrom(
        this.clientProxy.send({ cmd: MUSES_SUB_MODULE_GET }, input),
      );

      return output;
    } catch (error) {
      throw recoverErrorType(error);
    }
  }
}
