import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { OrganizationService } from './organization.service';
import { TreeOption, TreeNode } from 'src/share/components/tree/tree.type';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { Subject } from 'rxjs';
import { FormOption, Row, InputControl, AddItemControl } from 'src/share/components/form/form.type';
import { FormComponent } from 'src/share/components/form/form.component';
import { TreeComponent } from 'src/share/components/tree/tree.component';
import { SettingService } from 'src/services/setting.service';
import { ToastService } from 'src/share/components/toast/toast.service';

@Component({
  selector: 'nm-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrganizationComponent implements OnInit {

  addSubject = new Subject();
  updateSubject = new Subject();
  deleteSubject = new Subject();
  submitSubject = new Subject();
  nodeClickSubject = new Subject();

  @ViewChild("organization") organization: FormComponent;
  @ViewChild("organizationTree") organizationTree: TreeComponent;

  treeOption: TreeOption = {
    nodeClick: this.nodeClickSubject,
    operations: [
      { title: '增加', icon: 'icon-plus', handler: this.addSubject },
      { title: '修改', icon: 'icon-edit-2', handler: this.updateSubject },
      { title: '删除', icon: 'icon-trash-2', handler: this.deleteSubject }
    ],
    data: this.organizationService.findAll({ index: 1, size: 0 }).pipe(map(x => x.list))
  }

  formOption: FormOption = {
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
          new InputControl({ key: "type", label: "类型", col: 4 }),
          new InputControl({ key: "icon", label: "图标", col: 4 })
        ]
      }),
      new Row({
        title: '功能', icon: 'icon-grid', controls: [
          
        ]
      })
    ],
    buttons: [
      { type: 'submit', handler: this.submitSubject }
    ],
    type: 'info',
    isOnePage: true
  }

  constructor(
    private organizationService: OrganizationService,
    private settingService: SettingService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.addSubject.subscribe((x: TreeNode) => {
      this.organization.option.type = 'add';
      this.organization.form.reset();
      this.organization.form.patchValue({
        parentId: x.id,
        id: this.settingService.guid()
      })
    })
    this.updateSubject.subscribe((x: TreeNode) => {
      this.organization.option.type = 'update';
      this.organizationService.findOne(x.id).subscribe(y => {
        this.organization.form.patchValue(y);
      })
    })
    this.deleteSubject.subscribe((x: TreeNode) => {
      this.organizationService.remove(x.id).subscribe(y => {
        this.organizationTree.remove(x);
        this.toastService.create('删除成功');
      })
    })
    this.submitSubject.subscribe((x) => {
      if (this.organization.option.type == 'add') {
        this.organizationService.create(x).subscribe(y => {
          this.organizationTree.add(y);
          this.toastService.create('添加成功');
          this.organization.option.type = 'info';
        })
      } else if (this.organization.option.type == 'update') {
        this.organizationService.update(x).subscribe(y => {
          this.organizationTree.update(y);
          this.toastService.create('修改成功');
          this.organization.option.type = 'info';
        })
      }
    })
    this.nodeClickSubject.subscribe((x: TreeNode) => {
      this.organization.option.type = 'info';
      this.organizationService.findOne(x.id).subscribe(y => {
        if (y) this.organization.form.patchValue(y);
      })
    })
  }

}
