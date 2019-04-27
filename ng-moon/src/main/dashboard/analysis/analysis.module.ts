import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnalysisComponent } from "./analysis.component";
import { AnalysisRoutesModule } from "./analysis-routes.module";
import { NgMoonModule } from "ng-moon";

@NgModule({
  imports: [CommonModule, AnalysisRoutesModule, NgMoonModule],
  declarations: [AnalysisComponent],
  exports: [AnalysisComponent]
})
export class AnalysisModule {}
