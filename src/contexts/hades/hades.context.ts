import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

//Assignment
import { ArchiveAssignmentByUuidController } from '@hades/assignments/archive-assignment-by-uuid.controller';
import { DestroyAssignmentController } from '@hades/assignments/destroy-assignment.controller';
import { GetAssignmentController } from '@hades/assignments/get-assignment.controller';
import { ListAssignmentController } from '@hades/assignments/list-assigment.controller';
import { UpdateAssignmentController } from '@hades/assignments/update-assignment.controller';
import { CreateUserRoleAssignmentController } from '@hades/assignments/user-role-assignment.controller';
import { HadesClientNatsModule } from '@hades/hades-client-nats.context';
//Roles
import { ArchivePolicyController } from '@hades/policies/archive-policy.controller';
import { CreatePolicyController } from '@hades/policies/create-policy.controller';
import { DestroyPolicyController } from '@hades/policies/destroy-policy.controller';
import { GetPolicyController } from '@hades/policies/get-policy.controller';
import { ListPolicyController } from '@hades/policies/list-policy.controller';
import { UnarchivePolicyController } from '@hades/policies/unarchive-policy.controller';
import { UpdatePolicyController } from '@hades/policies/update-policy.controller';
import { ArchiveRoleController } from '@hades/roles/archive-role.controller';
import { CreateRoleController } from '@hades/roles/create-role.controller';
import { DestroyRoleController } from '@hades/roles/destroy-role.controller';
import { GetRoleController } from '@hades/roles/get-role.controller';
import { ListRoleController } from '@hades/roles/list-role.controller';
import { UpdateRoleController } from '@hades/roles/update-role.controller';
//Users
import { ActivateInvalidSessionController } from '@hades/sessions/activate-invalid-session.controller';
import { ArchiveSessionController } from '@hades/sessions/archive-session.controller';
import { CreateActiveSessionController } from '@hades/sessions/create-active-session.controller';
import { CreateInvalidSessionController } from '@hades/sessions/create-invalid-session.controller';
import { DestroySessionController } from '@hades/sessions/destroy-session.controller';
import { GetSessionController } from '@hades/sessions/get-session.controller';
import { IncrementFailedAttemptsSessionController } from '@hades/sessions/increment-failed-attempts-session.controller';
import { ListSessionController } from '@hades/sessions/list-session.controller';
import { TransitionStatusSessionController } from '@hades/sessions/transition-status-session.controller';
import { UpdateSessionController } from '@hades/sessions/update-session.controller';
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
    //Sessions
    ActivateInvalidSessionController,
    TransitionStatusSessionController,
    CreateActiveSessionController,
    CreateInvalidSessionController,
    UpdateSessionController,
    IncrementFailedAttemptsSessionController,
    ArchiveSessionController,
    DestroySessionController,
    GetSessionController,
    ListSessionController,
    //Assignments
    ArchiveAssignmentByUuidController,
    DestroyAssignmentController,
    GetAssignmentController,
    ListAssignmentController,
    UpdateAssignmentController,
    CreateUserRoleAssignmentController,
    //Policies
    CreatePolicyController,
    UpdatePolicyController,
    ArchivePolicyController,
    UnarchivePolicyController,
    DestroyPolicyController,
    ListPolicyController,
    GetPolicyController,
  ],
  exports: [],
})
export class HadesContext {}
