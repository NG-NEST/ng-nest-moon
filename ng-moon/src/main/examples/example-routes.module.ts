import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example.component';
import { ExInputComponent } from './ex-input/ex-input.component';
import { ExButtonComponent } from './ex-button/ex-button.component';
import { ExRadioComponent } from './ex-radio/ex-radio.component';
import { ExCheckboxComponent } from './ex-checkbox/ex-checkbox.component';
import { ExTableComponent } from './ex-table/ex-table.component';
import { ExToastComponent } from './ex-toast/ex-toast.component';
import { ExAlertComponent } from './ex-alert/ex-alert.component';
import { ExPopoverComponent } from './ex-popover/ex-popover.component';
import { ExModalComponent } from './ex-modal/ex-modal.component';
import { ExFormComponent } from './ex-form/ex-form.component';
import { ExTooltipComponent } from './ex-tooltip/ex-tooltip.component';
import { ExSelectComponent } from './ex-select/ex-select.component';
import { ExFindbackComponent } from './ex-findback/ex-findback.component';

const routes: Routes = [
  { path: '', component: ExampleComponent },
  { path: 'ex-input', component: ExInputComponent },
  { path: 'ex-button', component: ExButtonComponent },
  { path: 'ex-radio', component: ExRadioComponent },
  { path: 'ex-checkbox', component: ExCheckboxComponent },
  { path: 'ex-table', component: ExTableComponent },
  { path: 'ex-toast', component: ExToastComponent },
  { path: 'ex-alert', component: ExAlertComponent },
  { path: 'ex-tooltip', component: ExTooltipComponent },
  { path: 'ex-select', component: ExSelectComponent },
  { path: 'ex-popover', component: ExPopoverComponent },
  { path: 'ex-findback', component: ExFindbackComponent },
  { path: 'ex-modal', component: ExModalComponent },
  { path: 'ex-form', component: ExFormComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ExampleRoutesModule { }
