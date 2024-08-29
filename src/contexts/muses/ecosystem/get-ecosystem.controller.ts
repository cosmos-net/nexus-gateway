import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { recoverErrorType } from '@common/helpers/error-management';
import { CLIENT_PROXY_NAME } from '@muses/commons/constants';
import { MUSES_ECOSYSTEM_ENDPOINT, MUSES_ECOSYSTEM_GET } from '@muses/ecosystem/constants';

@Controller(MUSES_ECOSYSTEM_ENDPOINT)
export class GetEcosystemController {
  constructor(
    @Inject(CLIENT_PROXY_NAME)
    private clientProxy: ClientProxy,
  ) {}

  @Get('/:id')
  async get(@Param() input: unknown): Promise<unknown> {
    try {
      const output = await lastValueFrom(
        this.clientProxy.send({ cmd: MUSES_ECOSYSTEM_GET }, input),
      );

      return output;
    } catch (error) {
      throw recoverErrorType(error);
    }
  }
}
