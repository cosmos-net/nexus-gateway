import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { recoverErrorType } from '@common/helpers/error-management';
import { MUSES_ACTION_CREATE, MUSES_ACTION_ENDPOINT } from '@muses/action/constants';
import { CLIENT_PROXY_NAME } from '@muses/commons/constants';

@Controller(MUSES_ACTION_ENDPOINT)
export class CreateActionController {
  constructor(
    @Inject(CLIENT_PROXY_NAME)
    private clientProxy: ClientProxy,
  ) {}

  @Post()
  async create(@Body() input: unknown): Promise<unknown> {
    try {
      const output = await lastValueFrom(
        this.clientProxy.send({ cmd: MUSES_ACTION_CREATE }, input),
      );

      return output;
    } catch (error) {
      throw recoverErrorType(error);
    }
  }
}
