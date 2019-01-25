import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import { RoleRoutesModule } from './role-routes.module';
import { ShareModule } from 'src/share/share.module';
import { RoleService } from './role.service';
import { RoleInfoComponent } from './role-info/role-info.component';
import { MenuService } from '../menu/menu.service';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    RoleRoutesModule
  ],
  declarations: [RoleComponent,RoleInfoComponent],
  exports: [RoleComponent, RoleInfoComponent],
  providers: [
    RoleService,
    MenuService
  ]
})
export class RoleModule { }
