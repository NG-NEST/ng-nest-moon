import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleComponent } from './role.component';
import { RoleInfoComponent } from './role-info/role-info.component';

const routes: Routes = [
  { path: '',  component: RoleComponent },
  { path: 'info',  component: RoleInfoComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoleRoutesModule { }
