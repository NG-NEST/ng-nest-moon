import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainRoutesModule } from '../main/routes.module';
import { ShareModule } from '../share/share.module';

import { SettingService } from '../services/setting.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from 'src/services/http.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavService } from 'src/services/nav.service';
import { AuthGuard } from 'src/services/auths/auth-guard';
import { AuthService } from 'src/services/auths/auth.service';

const providers = [
  SettingService,
  HttpService,
  NavService,
  AuthGuard,
  AuthService
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ShareModule,
    MainRoutesModule
  ],
  providers: [...providers],
  bootstrap: [AppComponent]
})
export class AppModule { }
