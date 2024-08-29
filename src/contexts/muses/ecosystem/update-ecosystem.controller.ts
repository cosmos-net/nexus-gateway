import { Body, Controller, Inject, Patch } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { recoverErrorType } from '@common/helpers/error-management';
import { CLIENT_PROXY_NAME } from '@muses/commons/constants';
import { MUSES_ECOSYSTEM_ENDPOINT, MUSES_ECOSYSTEM_UPDATE } from '@muses/ecosystem/constants';

@Controller(MUSES_ECOSYSTEM_ENDPOINT)
export class UpdateEcosystemController {
  constructor(
    @Inject(CLIENT_PROXY_NAME)
    private clientProxy: ClientProxy,
  ) {}

  @Patch()
  async update(@Body() input: unknown): Promise<unknown> {
    try {
      const output = await lastValueFrom(
        this.clientProxy.send({ cmd: MUSES_ECOSYSTEM_UPDATE }, input),
      );

      return output;
    } catch (error) {
      throw recoverErrorType(error);
    }
  }
}