import { Component, OnInit, EventEmitter, ViewEncapsulation } from '@angular/core';
import { LayoutService } from '../layout.service';
import * as _ from 'lodash';

@Component({
  selector: 'nm-sider',
  templateUrl: './sider.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SiderComponent implements OnInit {

  // 输入参数-菜单数据
  option: any = _.filter(this.layoutService.menus, x => x.parentId === null);

  // 输出参数-节点点击
  nodeEmit = new EventEmitter<object>();

  // 层级
  level: number = 0;

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
  }

}
