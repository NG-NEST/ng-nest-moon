import {
  Component, OnInit, forwardRef, ChangeDetectorRef
} from '@angular/core';
import { TreeOption, TreeNode } from './tree.type';
import { TreeService } from './tree.service';
import * as _ from 'lodash';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SettingService } from 'src/services/setting.service';

@Component({
  selector: 'nm-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
  inputs: ['option'],
  providers: [
    TreeService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TreeComponent),
      multi: true
    }
  ]
})
export class TreeComponent implements OnInit {

  option: TreeOption;

  private _default: TreeOption = {
    openLevel: 1
  };

  _rootNodes: TreeNode[];

  level: number = 0;

  constructor(
    public treeService: TreeService,
    private changeDetectorRef: ChangeDetectorRef,
    private setting: SettingService
  ) { }

  ngOnInit() {
    this.setting.mapToObject(this._default, this.option);
    if (this.option.data) {
      this.option.data.subscribe(x => {
        if (x && x.length > 0) {
          this.refresh(x);
        }
      })
    }
  }

  refresh(data) {
    this.treeService.nodes = data;
    this._rootNodes = _.filter(this.treeService.nodes, y => y.parentId === null);
  }

  update(option: any) {
    let item = _.find(this.treeService.nodes, x => x.id == option.id);
    if (item) item = _.assign(item, option);
  }

  add(option: any) {
    this.treeService.nodes.push(option);
    let parent = _.find(this.treeService.nodes, x => x.id == option.parentId);
    if (parent) parent.showChildren = true;
    this.refresh(_.cloneDeep(this.treeService.nodes));
  }

  remove(option: any) {
    _.remove(this.treeService.nodes, x => x.path.indexOf(option.path) === 0);
    this.refresh(_.cloneDeep(this.treeService.nodes));
  }

}
