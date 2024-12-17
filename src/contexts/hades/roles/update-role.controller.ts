import { Body, Controller, Inject, Patch } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { recoverErrorType } from '@common/helpers/error-management';
import { HADES_CLIENT_CONTEXT_PROXY_NAME, COMMANDS_HADES } from '@hades/commons/commands-name';
import { HADES_ROLE_ENDPOINT } from '@hades/commons/end-points';

@Controller(HADES_ROLE_ENDPOINT)
export class UpdateRoleController {
  constructor(
    @Inject(HADES_CLIENT_CONTEXT_PROXY_NAME)
    private readonly clientProxy: ClientProxy,
  ) {}

  @Patch()
  async update(@Body() input: unknown): Promise<unknown> {
    try {
      const output = await lastValueFrom(
        this.clientProxy.send({ cmd: COMMANDS_HADES.ROLE.UPDATE }, input),
      );

      return output;
    } catch (error) {
      throw recoverErrorType(error);
    }
  }
}
