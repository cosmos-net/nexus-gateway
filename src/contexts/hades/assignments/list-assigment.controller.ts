import { Body, Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { recoverErrorType } from '@common/helpers/error-management';
import { HADES_CLIENT_CONTEXT_PROXY_NAME, COMMANDS_HADES } from '@hades/commons/commands-name';
import { HADES_ASSIGNMENT_ENDPOINT } from '@hades/commons/end-points';

@Controller(HADES_ASSIGNMENT_ENDPOINT)
export class ListAssignmentController {
  constructor(
    @Inject(HADES_CLIENT_CONTEXT_PROXY_NAME)
    private readonly clientProxy: ClientProxy,
  ) {}

  @Get('list')
  async list(@Body() input: unknown): Promise<unknown> {
    try {
      const output = await lastValueFrom(
        this.clientProxy.send({ cmd: COMMANDS_HADES.ASSIGNMENT.LIST }, input),
      );

      return output;
    } catch (error) {
      throw recoverErrorType(error);
    }
  }
}
