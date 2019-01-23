import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { RolesModule } from "./roles/roles.module";
import { MenusModule } from "./menus/menus.module";
import { ActionsModule } from "./actions/actions.module";
import { OrganizationModule } from "./organization/organization.module";

@Module({
    imports:[
        UsersModule,
        RolesModule,
        MenusModule,
        ActionsModule,
        OrganizationModule
    ]
})
export class SystemModule { }