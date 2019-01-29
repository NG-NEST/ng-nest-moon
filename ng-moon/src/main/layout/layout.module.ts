import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../share/share.module';
import { LayoutComponent } from './layout.component';
import { LayoutRoutesModule } from './layout-routes.module';
import { HeaderComponent } from './header/header.component';
import { SiderComponent } from './sider/sider.component';
import { ContentComponent } from './content/content.component';
import { LayoutService } from './layout.service';
import { SiderNodeComponent } from './sider/sider-node/sider-node.component';
import { TabsComponent } from './tabs/tabs.component';
import { ToggleComponent } from './toggle/toggle.component';

// 声明模块中拥有的视图类
const components = [
  LayoutComponent,
  HeaderComponent,
  TabsComponent,
  SiderComponent,
  SiderNodeComponent,
  ContentComponent,
  ToggleComponent
]

// 能够动态创建的视图类
const entryComponents = [
]

// 服务提供者
const providers = [
  // LayoutService
]

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    LayoutRoutesModule
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
export class LayoutModule { }
