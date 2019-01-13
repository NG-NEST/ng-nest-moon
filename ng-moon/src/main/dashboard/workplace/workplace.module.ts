import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkplaceComponent } from './workplace.component';
import { WorkplaceRoutesModule } from './workplace-routes.module';

@NgModule({
  imports: [
    CommonModule,
    WorkplaceRoutesModule
  ],
  declarations: [WorkplaceComponent],
  exports: [WorkplaceComponent]
})
export class WorkplaceModule { }
