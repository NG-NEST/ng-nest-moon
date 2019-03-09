import { Component, OnInit, ViewChild } from '@angular/core';
import { PopoverService } from 'src/share/components/popover/popover.service';
import { ButtonComponent } from 'src/share/components/button/button.component';
import { Observable } from 'rxjs';

/**
 * 浮动菜单
 * 
 * @export
 * @class ExPopoverComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'ex-popover',
  templateUrl: './ex-popover.component.html',
  styleUrls: ['./ex-popover.component.scss']
})
export class ExPopoverComponent implements OnInit {

  @ViewChild('popover') popover: ButtonComponent;

  constructor(
    private popoverService: PopoverService,

  ) { }

  ngOnInit() {
  }

  operation(type) {
    switch (type) {
      case 'popover':
        this.popoverService.create({
          connectRef: this.popover.elementRef,
          menus: [
            { title: '新增', icon: 'icon-plus-circle', handler: Observable.create(x => x.next('新增')) },
            { title: '修改', icon: 'icon-edit-2', handler: Observable.create(x => x.next('修改')) },
            { title: '删除', icon: 'icon-trash-2', handler: Observable.create(x => x.next('删除')) },
            { title: '查看', icon: 'icon-clipboard', handler: Observable.create(x => x.next('查看')) }
          ]
        })
        break;
    }
  }

}
