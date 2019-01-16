import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MenuService } from './menu.service';
import { TreeOption, TreeNode } from 'src/share/components/tree/tree.type';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { Subject } from 'rxjs';
import { FormOption, Row, InputControl, AddItemControl } from 'src/share/components/form/form.type';
import { FormComponent } from 'src/share/components/form/form.component';
import { TreeComponent } from 'src/share/components/tree/tree.component';
import { SettingService } from 'src/services/setting.service';

@Component({
  selector: 'nm-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

  addSubject = new Subject();
  updateSubject = new Subject();
  deleteSubject = new Subject();
  submitSubject = new Subject();
  nodeClickSubject = new Subject();

  @ViewChild("menu") menu: FormComponent;
  @ViewChild("menuTree") menuTree: TreeComponent;

  treeOption: TreeOption = {
    nodeClick: this.nodeClickSubject,
    operations: [
      { title: '增加', icon: 'icon-plus', handler: this.addSubject },
      { title: '修改', icon: 'icon-edit-2', handler: this.updateSubject },
      { title: '删除', icon: 'icon-trash-2', handler: this.deleteSubject }
    ],
    data: this.menuService.findAll({ index: 1, size: 0 }).pipe(map(x => x.list))
  }

  formOption: FormOption = {
    title: '账号信息',
    controls: [
      new Row({
        hide: true, controls: [
          new InputControl({ key: "id", label: "编号" }),
          new InputControl({ key: "parentId", label: "父节点编号" }),
          new InputControl({ key: "path", label: "路径" }),
        ]
      }),
      new Row({
        title: '基本信息', icon: 'icon-user', controls: [
          new InputControl({ key: "label", label: "名称", col: 4 }),
          new InputControl({ key: "router", label: "路由", col: 4 }),
          new InputControl({ key: "icon", label: "图标", col: 4 })
        ]
      }),
      new Row({
        title: '功能', icon: 'icon-grid', controls: [
          new AddItemControl({
            key: "actions",
            title: '功能',
            width: 300,
            form: {
              controls: [
                new Row({
                  hide: true, controls: [
                    new InputControl({ key: "id", label: "编号" }),
                    new InputControl({ key: "menuId", label: "编号", relation: 'many-one' }),
                  ]
                }),
                new Row({
                  controls: [
                    new InputControl({ key: "name", label: "名称", colHead: true }),
                    new InputControl({ key: "code", label: "编码", colHead: true }),
                    new InputControl({ key: "icon", label: "图标", colHead: true }),
                  ]
                })
              ]
            }
          }),
        ]
      })
    ],
    buttons: [
      { type: 'submit', handler: this.submitSubject }
    ],
    type: 'info'
  }

  constructor(private menuService: MenuService, private settingService: SettingService) { }

  ngOnInit() {
    this.addSubject.subscribe((x: TreeNode) => {
      this.menu.option.type = 'add';
      this.menu.form.reset();
      this.menu.form.patchValue({
        parentId: x.id,
        id: this.settingService.guid(),
        actions: []
      })
    })
    this.updateSubject.subscribe((x: TreeNode) => {
      this.menu.option.type = 'update';
      this.menuService.findOne(x.id).subscribe(y => {
        this.menu.form.setValue(y);
      })
    })
    this.deleteSubject.subscribe((x: TreeNode) => {
      this.menuService.remove(x.id).subscribe(y => {
        this.menuTree.remove(x);
      })
    })
    this.submitSubject.subscribe((x) => {
      if (this.menu.option.type == 'add') {
        this.menuService.create(x).subscribe(y => {
          this.menuTree.add(y);
        })
      } else if (this.menu.option.type == 'update') {
        this.menuService.update(x).subscribe(y => {
          this.menuTree.update(y);
        })
      }
    })
    this.nodeClickSubject.subscribe((x: TreeNode) => {
      this.menu.option.type = 'info';
      this.menuService.findOne(x.id).subscribe(y => {
        if (y) this.menu.form.setValue(y);
      })
    })
  }

}
