import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationComponent } from './organization.component';
import { OrganizationRoutesModule } from './organization-routes.module';
import { ShareModule } from 'src/share/share.module';
import { OrganizationService } from './organization.service';
@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    OrganizationRoutesModule
  ],
  declarations: [OrganizationComponent],
  exports: [OrganizationComponent],
  providers: [
    OrganizationService
  ]
})
export class OrganizationModule { }
