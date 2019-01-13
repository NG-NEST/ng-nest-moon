import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisComponent } from './analysis.component';

const routes: Routes = [
  { path: '',  component: AnalysisComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AnalysisRoutesModule { }
