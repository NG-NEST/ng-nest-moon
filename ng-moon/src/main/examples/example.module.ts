import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/share/share.module';
import { FormsModule } from '@angular/forms';
import { ExampleRoutesModule } from './example-routes.module';
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

// 声明模块中拥有的视图类
const components = [
  ExampleComponent,
  ExInputComponent,
  ExButtonComponent,
  ExRadioComponent,
  ExCheckboxComponent,
  ExTableComponent,
  ExToastComponent,
  ExAlertComponent,
  ExTooltipComponent,
  ExSelectComponent,
  ExPopoverComponent,
  ExModalComponent,
  ExFormComponent,
  ExFindbackComponent
]

// 能够动态创建的视图类
const entryComponents = [
]

// 服务提供者
const providers = [
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShareModule,
    ExampleRoutesModule
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ],
  entryComponents: [
    ...entryComponents
  ],
  providers: [
    ...providers
  ]
})
export class ExampleModule { }
