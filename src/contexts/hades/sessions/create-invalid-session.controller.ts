import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { recoverErrorType } from '@common/helpers/error-management';
import { COMMANDS_HADES, HADES_CLIENT_CONTEXT_PROXY_NAME } from '@hades/commons/commands-name';
import { HADES_SESSION_ENDPOINT } from '@hades/commons/end-points';

@Controller(HADES_SESSION_ENDPOINT)
export class CreateInvalidSessionController {
  constructor(
    @Inject(HADES_CLIENT_CONTEXT_PROXY_NAME)
    private readonly clientProxy: ClientProxy,
  ) {}

  @Post('invalid')
  async create(@Body() input: unknown): Promise<unknown> {
    try {
      const output = await lastValueFrom(
        this.clientProxy.send({ cmd: COMMANDS_HADES.SESSION.CREATE_INVALID }, input),
      );

      return output;
    } catch (error) {
      throw recoverErrorType(error);
    }
  }
}