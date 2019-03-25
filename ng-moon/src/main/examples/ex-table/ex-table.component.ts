import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TableOption } from 'src/share/components/table/table.type';
import { Observable } from 'rxjs';

/**
 * 表格
 * 
 * @export
 * @class ExTableComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'ex-table',
  templateUrl: './ex-table.component.html',
  styleUrls: ['./ex-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExTableComponent implements OnInit {

  option: TableOption = {
    columns: [
      { key: 'account', title: '账号' },
      { key: 'password', title: '密码' },
      { key: 'name', title: '姓名' },
      { key: 'email', title: '邮箱' },
      { key: 'phone', title: '电话' }
    ],
    data: this.getData()
  }

  constructor() { }

  ngOnInit() {
  }

  getData(): Observable<any> {
    return Observable.create(x => {
      let result = {
        count: 10,
        list: [],
        query: {
          index: 1,
          size: 10
        }
      }
      for (let i = 1; i <= 10; i++) {
        result.list.push({
          account: `账号${i}`,
          password: `密码${i}`,
          name: `姓名${i}`,
          email: `邮箱${i}`,
          phone: `电话${i}`,
        })
      }
      setTimeout(() => {
        x.next(result);
        x.complete();
      }, 100)
    })
  }

}
