import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { ScrollComponent } from './components/scroll/scroll.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SearchComponent } from './components/search/search.component';
import { TableComponent } from './components/table/table.component';
import { InnerComponent } from './components/inner/inner.component';
import { PanelComponent } from './components/panel/panel.component';
import { InputComponent } from './components/input/input.component';
import { GridComponent } from './components/grid/grid.component';
import { RowComponent } from './components/grid/row.component';
import { ColComponent } from './components/grid/col.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonsComponent } from './components/button/buttons.component';
import { RadioComponent } from './components/radio/radio.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { PortalComponent } from './components/portal/portal.component';
import { PortalService } from './components/portal/portal.service';
import { ToastComponent } from './components/toast/toast.component';
import { ToastService } from './components/toast/toast.service';
import { PortalModule } from '@angular/cdk/portal';
import { AlertService } from './components/alert/alert.service';
import { AlertComponent } from './components/alert/alert.component';
import { PopoverService } from './components/popover/popover.service';
import { PopoverComponent } from './components/popover/popover.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalService } from './components/modal/modal.service';
import { FormComponent } from './components/form/form.component';
import { FormService } from './components/form/form.service';
import { ControlComponent } from './components/form/control.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TooltipService } from './components/tooltip/tooltip.service';
import { TooltipPortalComponent } from './components/tooltip/tooltip-portal.component';
import { SelectComponent } from './components/select/select.component';
import { SelectPortalComponent } from './components/select/select-portal.component';
import { SelectService } from './components/select/select.service';
import { TreeComponent } from './components/tree/tree.component';
import { TreeNodeComponent } from './components/tree/tree-node.component';
import { CoverPipe } from './pipes/cover.pipe';
import { FindbackComponent } from './components/findback/findback.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { AddItemService } from './components/add-item/add-item.service';
import { ActionDirective } from './pipes/action.directive';
import { GroupService } from './components/group/group.service';
import { GroupComponent } from './components/group/group.component';

// 声明模块中拥有的视图类
const components = [
    GridComponent,
    RowComponent,
    ColComponent,
    ScrollComponent,
    InnerComponent,
    PanelComponent,
    PortalComponent,
    ToolbarComponent,
    SearchComponent,
    TableComponent,
    InputComponent,
    ButtonComponent,
    ButtonsComponent,
    RadioComponent,
    CheckboxComponent,
    ToastComponent,
    AlertComponent,
    PopoverComponent,
    ModalComponent,
    FormComponent,
    ControlComponent,
    TooltipComponent,
    TooltipPortalComponent,
    SelectComponent,
    SelectPortalComponent,
    TreeComponent,
    TreeNodeComponent,
    PaginationComponent,
    FindbackComponent,
    AddItemComponent,
    GroupComponent,

    CoverPipe,
    ActionDirective
]

// 能够动态创建的视图类
const entryComponents = [
    ToastComponent,
    AlertComponent,
    PopoverComponent,
    ModalComponent,
    TooltipPortalComponent,
    SelectPortalComponent,
    GroupComponent
]

// 模块
const modules = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    PortalModule
]

// 服务
const providers = [
    PortalService,
    ToastService,
    AlertService,
    PopoverService,
    ModalService,
    FormService,
    TooltipService,
    SelectService,
    GroupService
]

@NgModule({
    imports: [
        ...modules
    ],
    declarations: [
        ...components
    ],
    exports: [
        ...components,
        ...modules
    ],
    entryComponents: [
        ...entryComponents
    ],
    providers: [
        ...providers
    ]
})
export class ShareModule { }
