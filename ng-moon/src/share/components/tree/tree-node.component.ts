import {
  Component, OnInit, ViewEncapsulation
} from '@angular/core';
import { TreeNode, TreeOperation } from './tree.type';
import { TreeService } from './tree.service';
import * as _ from 'lodash';
import { Subject } from 'rxjs';

@Component({
  selector: '[nm-tree-node]',
  templateUrl: './tree-node.component.html',
  encapsulation: ViewEncapsulation.None,
  inputs: ['option', 'level', 'operations', 'nodeClick', 'openLevel'],
})
export class TreeNodeComponent implements OnInit {

  option: TreeNode;

  level: number;

  operations: TreeOperation[];

  nodeClick: Subject<any>;

  openLevel: number;

  _childrens: TreeNode[];

  constructor(private treeService: TreeService) { }

  ngOnInit() {
    this.level = this.level + 1;
    this.option.showChildren = this.level <= this.openLevel
    this._childrens = _.filter(this.treeService.nodes, x => x.parentId == this.option.id);
  }

  toggle(event: Event, option) {
    event.stopPropagation();
    if (this._childrens.length > 0) option.showChildren = !option.showChildren;
  }

  action(event: Event, option: TreeOperation) {
    event.stopPropagation();
    if (option.handler) {
      option.handler.next(this.option);
    }
  }

  click(event: Event) {
    event.stopPropagation();
    if (this.nodeClick) {
      this.treeService.selected = this.option;
      this.nodeClick.next(this.option);
    }
  }

}
