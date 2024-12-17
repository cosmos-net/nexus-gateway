import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { HadesClientNatsModule } from '@hades/hades-client-nats.context';
import { ArchiveRoleController } from '@hades/roles/archive-role.controller';
import { CreateRoleController } from '@hades/roles/create-role.controller';
import { DestroyRoleController } from '@hades/roles/destroy-role.controller';
import { GetRoleController } from '@hades/roles/get-role.controller';
import { ListRoleController } from '@hades/roles/list-role.controller';
import { UpdateRoleController } from '@hades/roles/update-role.controller';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), HadesClientNatsModule],
  exports: [
    CreateRoleController,
    UpdateRoleController,
    ArchiveRoleController,
    DestroyRoleController,
    GetRoleController,
    ListRoleController,
  ],
})
export class HadesContext {}
