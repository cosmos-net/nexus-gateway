import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CreateActionController } from '@muses/action/create-action.controller';
import { DisableActionController } from '@muses/action/disable-action.controller';
import { GetActionController } from '@muses/action/get-action.controller';
import { ListActionController } from '@muses/action/list-action.controller';
import { UpdateActionController } from '@muses/action/update-action.controller';
import { CreateActionCatalogController } from '@muses/action-catalog/create-action.controller';
import { CreateEcosystemController } from '@muses/ecosystem/create-ecosystem.controller';
import { DisableEcosystemController } from '@muses/ecosystem/disable-ecosystem.controller';
import { GetEcosystemController } from '@muses/ecosystem/get-ecosystem.controller';
import { ListEcosystemController } from '@muses/ecosystem/list-ecosystem.controller';
import { UpdateEcosystemController } from '@muses/ecosystem/update-ecosystem.controller';
import { CreateModuleController } from '@muses/module/create-module.controller';
import { DisableModuleController } from '@muses/module/disable-module.controller';
import { GetModuleController } from '@muses/module/get-module.controller';
import { ListModuleController } from '@muses/module/list-module.controller';
import { UpdateModuleController } from '@muses/module/update-module.controller';
import { MusesClientNatsModule } from '@muses/muses-client-nats.context';
import { CreateProjectController } from '@muses/project/create-project.controller';
import { DisableProjectController } from '@muses/project/disable-project.controller';
import { GetProjectController } from '@muses/project/get-project.controller';
import { ListProjectController } from '@muses/project/list-project.controller';
import { UpdateProjectController } from '@muses/project/update-project.controller';
import { CreateResourceController } from '@muses/resource/create-resource.controller';
import { DisableResourceController } from '@muses/resource/disable-resource.controller';
import { GetResourceController } from '@muses/resource/get-resource.controller';
import { ListResourceController } from '@muses/resource/list-resource.controller';
import { UpdateResourceController } from '@muses/resource/update-resource.controller';
import { CreateSubModuleController } from '@muses/sub-module/create-sub-module.controller';
import { DisableSubModuleController } from '@muses/sub-module/disable-sub-module.controller';
import { GetSubModuleController } from '@muses/sub-module/get-sub-module.controller';
import { ListSubModuleController } from '@muses/sub-module/list-sub-module.controller';
import { UpdateSubModuleController } from '@muses/sub-module/update-sub-module.controller';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), MusesClientNatsModule],
  controllers: [
    CreateEcosystemController,
    UpdateEcosystemController,
    ListEcosystemController,
    GetEcosystemController,
    DisableEcosystemController,
    CreateProjectController,
    UpdateProjectController,
    ListProjectController,
    GetProjectController,
    DisableProjectController,
    CreateModuleController,
    UpdateModuleController,
    ListModuleController,
    GetModuleController,
    DisableModuleController,
    CreateSubModuleController,
    UpdateSubModuleController,
    ListSubModuleController,
    GetSubModuleController,
    DisableSubModuleController,
    CreateActionController,
    UpdateActionController,
    ListActionController,
    GetActionController,
    DisableActionController,
    CreateActionCatalogController,
    CreateResourceController,
    UpdateResourceController,
    ListResourceController,
    GetResourceController,
    DisableResourceController,
  ],
  exports: [],
})
export class MusesContext {}
