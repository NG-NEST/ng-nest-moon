import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleComponent } from './module.component';
import { ModuleRoutesModule } from './module-routes.module';
import { ShareModule } from 'src/share/share.module';
import { ModuleService } from './module.service';
@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    ModuleRoutesModule
  ],
  declarations: [ModuleComponent],
  exports: [ModuleComponent],
  providers: [
    ModuleService
  ]
})
export class ModuleModule { }
