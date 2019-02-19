import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/share/share.module';
import { ModuleInfoComponent } from './module-info.component';
import { ModuleInfoRoutesModule } from './module-info-routes.module';
import { MiBaseComponent } from './mi-base/mi-base.component';
import { MiPageComponent } from './mi-page/mi-page.component';
import { MiPageInfoComponent } from './mi-page/mi-page-info.component';

const components = [
    ModuleInfoComponent,
    MiBaseComponent,
    MiPageComponent,
    MiPageInfoComponent
]

@NgModule({
    imports: [
        CommonModule,
        ShareModule,
        ModuleInfoRoutesModule
    ],
    declarations: [...components],
    exports: [...components]
})
export class ModuleInfoModule { }
