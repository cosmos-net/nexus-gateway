import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { recoverErrorType } from '@common/helpers/error-management';
import { COMMANDS_MUSES, MUSES_CLIENT_CONTEXT_PROXY_NAME } from '@muses/commons/commands-name';
import { MUSES_RESOURCE_ENDPOINT } from '@muses/commons/end-points';

@Controller(MUSES_RESOURCE_ENDPOINT)
export class ListResourceController {
  constructor(
    @Inject(MUSES_CLIENT_CONTEXT_PROXY_NAME)
    private readonly clientProxy: ClientProxy,
  ) {}

  @Get('list')
  async list(@Query() input: unknown): Promise<unknown> {
    try {
      const output = await lastValueFrom(
        this.clientProxy.send({ cmd: COMMANDS_MUSES.RESOURCE.LIST }, input),
      );

      return output;
    } catch (error) {
      throw recoverErrorType(error);
    }
  }
}
