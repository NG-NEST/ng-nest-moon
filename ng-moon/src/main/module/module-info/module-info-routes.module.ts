import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleInfoComponent } from './module-info.component';
import { shareRoutes } from 'src/environments/routes';
import { MiBaseInfoComponent } from './mi-base/mi-base.component';

const routes: Routes = [
  {
    path: '', component: ModuleInfoComponent, children: [
      { path: '', redirectTo: 'base', pathMatch: 'full' },
      { path: 'base', component: MiBaseInfoComponent },
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
