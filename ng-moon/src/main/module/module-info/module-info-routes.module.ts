import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleInfoComponent } from './module-info.component';
import { shareRoutes } from 'src/environments/routes';
import { MiBaseComponent } from './mi-base/mi-base.component';
import { MiPageComponent } from './mi-page/mi-page.component';
import { MiPageInfoComponent } from './mi-page/mi-page-info.component';
import { MiPageEyeComponent } from './mi-page/mi-page-eye.component';

const routes: Routes = [
  {
    path: '', component: ModuleInfoComponent, children: [
      { path: '', redirectTo: 'base', pathMatch: 'full' },
      { path: 'base', component: MiBaseComponent },
      { path: 'page', component: MiPageComponent },
      { path: 'page/eye/:id', component: MiPageEyeComponent },
      { path: 'page/:type', component: MiPageInfoComponent },
      { path: 'page/:type/:id', component: MiPageInfoComponent },
      ...shareRoutes
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ModuleInfoRoutesModule { }
