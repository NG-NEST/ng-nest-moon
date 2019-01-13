import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkplaceComponent } from './workplace.component';

const routes: Routes = [
  { path: '',  component: WorkplaceComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class WorkplaceRoutesModule { }
