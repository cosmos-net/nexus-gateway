import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { recoverErrorType } from '@common/helpers/error-management';
import { CLIENT_PROXY_NAME } from '@muses/commons/constants';
import { MUSES_RESOURCE_CREATE, MUSES_RESOURCE_ENDPOINT } from '@muses/resource/constants';

@Controller(MUSES_RESOURCE_ENDPOINT)
export class CreateResourceController {
  constructor(
    @Inject(CLIENT_PROXY_NAME)
    private clientProxy: ClientProxy,
  ) {}

  @Post()
  async create(@Body() input: unknown): Promise<unknown> {
    try {
      const output = await lastValueFrom(
        this.clientProxy.send({ cmd: MUSES_RESOURCE_CREATE }, input),
      );

      return output;
    } catch (error) {
      throw recoverErrorType(error);
    }
  }
}
