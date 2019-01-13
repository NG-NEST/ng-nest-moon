import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuRoutesModule } from './menu-routes.module';
import { ShareModule } from 'src/share/share.module';
import { MenuService } from './menu.service';
@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    MenuRoutesModule
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent],
  providers: [
    MenuService
  ]
})
export class MenuModule { }
