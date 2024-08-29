import { Body, Controller, Inject, Patch } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { recoverErrorType } from '@common/helpers/error-management';
import { CLIENT_PROXY_NAME } from '@muses/commons/constants';
import { MUSES_RESOURCE_ENDPOINT, MUSES_RESOURCE_UPDATE } from '@muses/resource/constants';

@Controller(MUSES_RESOURCE_ENDPOINT)
export class UpdateResourceController {
  constructor(
    @Inject(CLIENT_PROXY_NAME)
    private clientProxy: ClientProxy,
  ) {}

  @Patch()
  async update(@Body() input: unknown): Promise<unknown> {
    try {
      const output = await lastValueFrom(
        this.clientProxy.send({ cmd: MUSES_RESOURCE_UPDATE }, input),
      );

      return output;
    } catch (error) {
      throw recoverErrorType(error);
    }
  }
}
