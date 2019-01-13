import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisComponent } from './analysis.component';
import { AnalysisRoutesModule } from './analysis-routes.module';

@NgModule({
  imports: [
    CommonModule,
    AnalysisRoutesModule
  ],
  declarations: [AnalysisComponent],
  exports:[AnalysisComponent]
})
export class AnalysisModule { }
