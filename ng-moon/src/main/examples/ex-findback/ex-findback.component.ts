import { Component, OnInit, ViewEncapsulation, ViewChild, TemplateRef } from '@angular/core';
import { FindbackOption } from 'src/share/components/findback/findback.type';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { RoleService } from 'src/main/system/role/role.service';
import { FindbackComponent } from 'src/share/components/findback/findback.component';

/**
 * 查找带回
 * 
 * @export
 * @class ExFindbackComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'ex-findback',
  templateUrl: './ex-findback.component.html',
  styleUrls: ['./ex-findback.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    RoleService
  ]
})
export class ExFindbackComponent implements OnInit {

  @ViewChild("findback") findback: FindbackComponent;

  value = []

  option: FindbackOption = {
    title: '查找带回',
    type: 'multiple',
    table: {
      columns: [
        { key: 'label', title: '角色名称' },
      ],
      data: this.getData().pipe(map(x => {
        x.list = _.map(x.list, y => { return { id: y.id, label: y.name } })
        return x
      })),
      selectType: 'multiple'
    }
  }

  constructor(private role: RoleService) { }

  ngOnInit() {
  }

  getData(): Observable<any> {
    return Observable.create(x => {
      this.role.findAll(this.option.table.query).subscribe(y => {
        x.next(y);
      })
    })
  }

}
