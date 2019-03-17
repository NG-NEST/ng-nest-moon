
<div align="center">
    <img src="https://avatars1.githubusercontent.com/u/46649777?s=200&v=4" />
</div>
<h1 align="center" style="margin-top:10px">
    NG-NEST
</h1>

使用 Angular 和 NestJS 构建的后台管理系统框架：

> * 提供基本的系统模块
> * 基于RBAC的权限管理

------

### 1. 支持环境
- Angular `^7.0.0`
- NestJS `^5.1.0`
- 现代浏览器，以及 Internet Explorer 11+ （使用 [polyfills](https://angular.io/guide/browser-support)）

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Electron |
| --------- | --------- | --------- | --------- | --------- | --------- |
| IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions

### 2. 目录说明
| 目录        | 说明        |
| ----------- | ----------- |
| ng-moon     | Angular前端项目 |
| nj-moon     | NestJS后台API接口项目  |

### 3. 开始--前端
```bash
$ cd ng-moon
$ npm install
$ ng serve -o
```
### 4. 开始--后台
例子使用 `TypeORM` 连接的 `MySql` 数据库，运行前请在 `nj-moon/ormconfig.js` 文件中配置好数据库连接。  
`MySql` 数据库文件 `nj-moon/ng-nest.sql` ，通过 `MySQL Workbench` 导入。 使用 `TypeORM` 可以自动创建好表，但是暂时未找到初始化数据的方式，目前直接提供数据库文件导入，后期会删除。  

```bash
$ cd nj-moon
$ npm install
$ npm run start:dev
```
### 5. 功能清单
部分完成的基本功能点如下，下阶段准备开发和处理的问题可以查看 `doc/ng-nest功能点开发和问题.xls` 文档  

| 功能        | 基本        |  完善       |
| ----------- | ----------- | ----------- |
| 登陆界面    | √           |             |
| 示例页面    | √           |             |
| ——输入框    | √           |             |
| ——按钮      | √           |             |
| ——单选      | √           |             |
| ——多选      | √           |             |
| ——表格      | √           |             |
| ——弹出框    | √           |             |
| ——消息框    | √           |             |
| ——工具提示  | √           |             |
| ——下拉选择  | √           |             |
| ——浮动菜单  | √           |             |
| ——模态框    | √           |             |
| ——查找带回  | √           |             |
| ——添加行    | √           |             |
| ——动态表单  | √           |             |
| ——工作流    |             |             |
| 菜单管理    | √           |             |
| 组织机构    | √           |             |
| 角色管理    | √           |             |
| 用户管理    | √           |             |

### 6. 架构规划(后台)
大部分功能在 `NestJs` 中已经实现，只需要集成进去就可以了。
<div align="center">
    <img src="https://github.com/NG-NEST/ng-nest-moon/blob/master/doc/assets/ng-nest-moon.png?raw=true" />
</div>

### 7. 前端系统截图
<div align="center">
    <img src="https://github.com/NG-NEST/ng-nest-moon/blob/master/doc/assets/ng-nest-login.png?raw=true" />
</div>

------

<div align="center">
    <img src="https://github.com/NG-NEST/ng-nest-moon/blob/master/doc/assets/ng-nest-examples.png?raw=true" />
</div>

------

<div align="center">
    <img src="https://github.com/NG-NEST/ng-nest-moon/blob/master/doc/assets/ng-nest-menu.png?raw=true" />
</div>

------

<div align="center">
    <img src="https://github.com/NG-NEST/ng-nest-moon/blob/master/doc/assets/ng-nest-user.png?raw=true" />
</div>

------

<div align="center">
    <img src="https://github.com/NG-NEST/ng-nest-moon/blob/master/doc/assets/ng-nest-role.png?raw=true" />
</div>

------

<div align="center">
    <img src="https://github.com/NG-NEST/ng-nest-moon/blob/master/doc/assets/ng-nest-module.png?raw=true" />
</div>