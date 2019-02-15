import { Routes } from "@angular/router";
import { environment } from "./environment";
import { AuthGuard } from "src/services/auths/auth-guard";

// 顶级路由，指向框架页
export const mainRoutes: Routes = [
    // index 指向框架模块
    { path: 'index', loadChildren: 'src/main/layout/layout.module#LayoutModule', canActivateChild: [AuthGuard], canLoad: [AuthGuard] },
    // 如果路由为空就指向 index
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    // 没有权限的显示模块
    { path: 'no-auth', loadChildren: 'src/main/no-auth/no-auth.module#NoAuthModule' },
    // 登录页
    { path: 'login', loadChildren: 'src/main/login/login.module#LoginModule' },
    // 错误的路由或不存在的路由指向的模块
    { path: '**', loadChildren: 'src/main/exception/404.module#Exception404Module' }
];

// 框架页中对应的路由，指向具体的页面，框架页面中的路由都会带上顶级路由 index 如：/index/workplace 
export const layoutRoutes: Routes = [
    // 如果路由为空就指向配置的默认首页
    { path: '', redirectTo: environment.defaultPage, pathMatch: 'full' },
    // 示例功能
    { path: 'examples', loadChildren: 'src/main/examples/example.module#ExampleModule', canLoad: [AuthGuard] },
    // 工作型首页
    { path: 'workplace', loadChildren: 'src/main/dashboard/workplace/workplace.module#WorkplaceModule', canLoad: [AuthGuard] },
    // 数据型首页
    { path: 'analysis', loadChildren: 'src/main/dashboard/analysis/analysis.module#AnalysisModule', canLoad: [AuthGuard] },
    // 账号管理
    { path: 'account', loadChildren: 'src/main/system/account/account.module#AccountModule', canLoad: [AuthGuard] },
    // 角色管理
    { path: 'role', loadChildren: 'src/main/system/role/role.module#RoleModule', canLoad: [AuthGuard] },
    // 菜单管理
    { path: 'menu', loadChildren: 'src/main/system/menu/menu.module#MenuModule', canLoad: [AuthGuard] },
    // 组织管理
    { path: 'organization', loadChildren: 'src/main/system/organization/organization.module#OrganizationModule', canLoad: [AuthGuard] },
    // 模块设计
    { path: 'module', loadChildren: 'src/main/module/module.module#ModuleModule', canLoad: [AuthGuard] },
    // 没有权限的显示模块
    { path: 'no-auth', loadChildren: 'src/main/no-auth/no-auth.module#NoAuthModule' },
    // 错误的路由或不存在的路由指向的模块
    { path: '**', loadChildren: 'src/main/exception/404.module#Exception404Module' }
]