import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleComponent } from './module.component';

const routes: Routes = [
  { path: '',  component: ModuleComponent },
  { path: 'info/:id',  loadChildren: 'src/main/module/module-info/module-info.module#ModuleInfoModule' },
  { path: ':type',  loadChildren: 'src/main/module/module-info/module-info.module#ModuleInfoModule' },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ModuleRoutesModule { }
