import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AccountRoutesModule } from './account-routes.module';
import { ShareModule } from 'src/share/share.module';
import { AccountService } from './account.service';
import { AccountInfoComponent } from './account-info/account-info.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    AccountRoutesModule
  ],
  declarations: [AccountComponent,AccountInfoComponent],
  exports: [AccountComponent, AccountInfoComponent],
  providers: [
    AccountService
  ]
})
export class AccountModule { }
