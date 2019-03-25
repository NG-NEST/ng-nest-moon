import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AddItemOption } from 'src/share/components/add-item/add-item.type';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { RoleService } from 'src/main/system/role/role.service';
import { AddItemComponent } from 'src/share/components/add-item/add-item.component';
import { Row, InputControl } from 'src/share/components/form/form.type';

/**
 * 添加行
 * 
 * @export
 * @class ExAddItemComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'ex-add-item',
  templateUrl: './ex-add-item.component.html',
  styleUrls: ['./ex-add-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    RoleService
  ]
})
export class ExAddItemComponent implements OnInit {

  @ViewChild("addItem") addItem: AddItemComponent;

  value = []

  option: AddItemOption = {
    title: '功能',
    width: 300,
    form: {
      title: '角色信息',
      controls: [
        new Row({
          hide: true, controls: [
            new InputControl({ key: "id", label: "编号" }),
          ]
        }),
        new Row({
          controls: [
            new InputControl({ key: "name", label: "名称", colHead: true }),
            new InputControl({ key: "code", label: "编码", colHead: true }),
            new InputControl({ key: "icon", label: "图标", colHead: true  }),
          ]
        })
      ]
    }
  }

  constructor(private role: RoleService) { }

  ngOnInit() {
  }

  getData(): Observable<any> {
    return Observable.create(x => {
      // this.role.findAll(this.option.table.query).subscribe(y => {
      //   x.next(y);
      // })
    })
  }

}
