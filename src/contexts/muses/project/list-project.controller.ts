import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { recoverErrorType } from '@common/helpers/error-management';
import { CLIENT_PROXY_NAME } from '@muses/commons/constants';
import { MUSES_PROJECT_ENDPOINT, MUSES_PROJECT_LIST } from '@muses/project/constants';

@Controller(MUSES_PROJECT_ENDPOINT)
export class ListProjectController {
  constructor(
    @Inject(CLIENT_PROXY_NAME)
    private clientProxy: ClientProxy,
  ) {}

  @Get('list')
  async list(@Query() input: unknown): Promise<unknown> {
    try {
      const output = await lastValueFrom(this.clientProxy.send({ cmd: MUSES_PROJECT_LIST }, input));

      return output;
    } catch (error) {
      throw recoverErrorType(error);
    }
  }
}
