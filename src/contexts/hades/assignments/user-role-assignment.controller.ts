import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { recoverErrorType } from '@common/helpers/error-management';
import { COMMANDS_HADES, HADES_CLIENT_CONTEXT_PROXY_NAME } from '@hades/commons/commands-name';
import { HADES_ASSIGNMENT_ENDPOINT } from '@hades/commons/end-points';

@Controller(HADES_ASSIGNMENT_ENDPOINT)
export class CreateUserRoleAssignmentController {
  constructor(
    @Inject(HADES_CLIENT_CONTEXT_PROXY_NAME)
    private readonly clientProxy: ClientProxy,
  ) {}

  @Post()
  async create(@Body() input: unknown): Promise<unknown> {
    try {
      const output = await lastValueFrom(
        this.clientProxy.send({ cmd: COMMANDS_HADES.ASSIGNMENT.CREATE }, input),
      );

      return output;
    } catch (error) {
      throw recoverErrorType(error);
    }
  }
}
