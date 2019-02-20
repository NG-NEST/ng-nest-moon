import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { AccountInfoComponent } from './account-info/account-info.component';

const routes: Routes = [
  { path: '',  component: AccountComponent },
  { path: ':type',  component: AccountInfoComponent },
  { path: ':type/:id',  component: AccountInfoComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AccountRoutesModule { }
