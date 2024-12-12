import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { recoverErrorType } from '@common/helpers/error-management';
import { COMMANDS_MUSES, MUSES_CLIENT_CONTEXT_PROXY_NAME } from '@muses/commons/commands-name';
import { MUSES_ECOSYSTEM_ENDPOINT } from '@muses/commons/end-points';

@Controller(MUSES_ECOSYSTEM_ENDPOINT)
export class CreateEcosystemController {
  constructor(
    @Inject(MUSES_CLIENT_CONTEXT_PROXY_NAME)
    private readonly clientProxy: ClientProxy,
  ) {}

  @Post()
  async create(@Body() input: unknown): Promise<unknown> {
    try {
      const output = await lastValueFrom(
        this.clientProxy.send({ cmd: COMMANDS_MUSES.ECOSYSTEM.CREATE }, input),
      );

      return output;
    } catch (error) {
      throw recoverErrorType(error);
    }
  }

  @MessagePattern({ cmd: 'muses.ecosystem.create.confirmed' })
  async createdConfirmation(@Payload() dto: unknown): Promise<unknown> {
    return dto;
  }
}
