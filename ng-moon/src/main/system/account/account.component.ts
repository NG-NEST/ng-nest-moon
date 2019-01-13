import { Component, OnInit, ViewChild } from '@angular/core';
import { TableOption } from 'src/share/components/table/table.type';
import { Observable } from 'rxjs';
import { AccountService } from './account.service';
import { TableComponent } from 'src/share/components/table/table.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nm-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  @ViewChild("tableCom") tableCom: TableComponent;

  table: TableOption = {
    columns: [
      { key: 'account', title: '账号' },
      { key: 'password', title: '密码' },
      { key: 'name', title: '姓名' },
      { key: 'email', title: '邮箱' },
      { key: 'phone', title: '电话' }
    ],
    operations: [
      { icon: 'icon-edit-2', handler: (x) => this.update(x) },
      { icon: 'icon-trash-2', handler: (x) => this.remove(x) }
    ],
    data: this.getData()
  }

  constructor(
    private account: AccountService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

  }

  update(param) {
    this.action('update', param);
  }

  remove(param) {
    this.account.remove(param.id).subscribe(x => {
      this.tableCom.refresh();
    });
  }

  getData(): Observable<any> {
    return Observable.create(x => {
      this.account.findAll(this.table.query).subscribe(y => {
        x.next(y);
      })
    })
  }

  action(type, param?) {
    switch (type) {
      case 'add':
        this.router.navigate(['./info', { type: type }], { relativeTo: this.activatedRoute });
        break;
      case 'update':
        this.router.navigate(['./info', { type: type, id: param.id }], { relativeTo: this.activatedRoute });
        break;
    }
  }
}
