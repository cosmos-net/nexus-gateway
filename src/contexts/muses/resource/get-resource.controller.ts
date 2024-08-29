import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { recoverErrorType } from '@common/helpers/error-management';
import { CLIENT_PROXY_NAME } from '@muses/commons/constants';
import { MUSES_RESOURCE_ENDPOINT, MUSES_RESOURCE_GET } from '@muses/resource/constants';

@Controller(MUSES_RESOURCE_ENDPOINT)
export class GetResourceController {
  constructor(
    @Inject(CLIENT_PROXY_NAME)
    private clientProxy: ClientProxy,
  ) {}

  @Get('/:id')
  async get(@Param() input: unknown): Promise<unknown> {
    try {
      const output = await lastValueFrom(this.clientProxy.send({ cmd: MUSES_RESOURCE_GET }, input));

      return output;
    } catch (error) {
      throw recoverErrorType(error);
    }
  }
}
