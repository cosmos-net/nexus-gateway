import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { HadesClientNatsModule } from '@hades/hades-client-nats.context';
//Roles
import { ArchiveRoleController } from '@hades/roles/archive-role.controller';
import { CreateRoleController } from '@hades/roles/create-role.controller';
import { DestroyRoleController } from '@hades/roles/destroy-role.controller';
import { GetRoleController } from '@hades/roles/get-role.controller';
import { ListRoleController } from '@hades/roles/list-role.controller';
import { UpdateRoleController } from '@hades/roles/update-role.controller';
//Users
import { ArchiveUserController } from '@hades/users/archive-user.controller';
import { CreateUserController } from '@hades/users/create-user.controller';
import { DestroyUserController } from '@hades/users/destroy-user.controller';
import { GetUserController } from '@hades/users/get-user.controller';
import { ListUserController } from '@hades/users/list-user.controller';
import { UpdateUserController } from '@hades/users/update-user.controller';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), HadesClientNatsModule],
  controllers: [
    //Roles
    CreateRoleController,
    UpdateRoleController,
    ArchiveRoleController,
    DestroyRoleController,
    GetRoleController,
    ListRoleController,
    //Users
    CreateUserController,
    UpdateUserController,
    ArchiveUserController,
    DestroyUserController,
    GetUserController,
    ListUserController,
  ],
  exports: [],
})
export class HadesContext {}
