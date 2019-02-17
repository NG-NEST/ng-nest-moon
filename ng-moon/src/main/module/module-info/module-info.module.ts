import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/share/share.module';
import { ModuleInfoComponent } from './module-info.component';
import { ModuleInfoRoutesModule } from './module-info-routes.module';
import { MiBaseInfoComponent } from './mi-base/mi-base.component';
import { ModuleInfoService } from './module-info.service';

const components = [
    ModuleInfoComponent,
    MiBaseInfoComponent
]

@NgModule({
    imports: [
        CommonModule,
        ShareModule,
        ModuleInfoRoutesModule
    ],
    declarations: [...components],
    exports: [...components],
    providers: [ModuleInfoService]
})
export class ModuleInfoModule { }
