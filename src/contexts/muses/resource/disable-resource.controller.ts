import { Controller, Delete, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { recoverErrorType } from '@common/helpers/error-management';
import { CLIENT_PROXY_NAME } from '@muses/commons/constants';
import { MUSES_RESOURCE_DISABLE, MUSES_RESOURCE_ENDPOINT } from '@muses/resource/constants';

@Controller(MUSES_RESOURCE_ENDPOINT)
export class DisableResourceController {
  constructor(
    @Inject(CLIENT_PROXY_NAME)
    private clientProxy: ClientProxy,
  ) {}

  @Delete('/:id')
  async disable(@Param() input: unknown): Promise<unknown> {
    try {
      const output = await lastValueFrom(
        this.clientProxy.send({ cmd: MUSES_RESOURCE_DISABLE }, input),
      );

      return output;
    } catch (error) {
      throw recoverErrorType(error);
    }
  }
}
