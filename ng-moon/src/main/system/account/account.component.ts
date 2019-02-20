import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TableOption } from 'src/share/components/table/table.type';
import { Observable, Subject } from 'rxjs';
import { AccountService } from './account.service';
import { TableComponent } from 'src/share/components/table/table.component';
import { Router, ActivatedRoute } from '@angular/router';
import { TreeComponent } from 'src/share/components/tree/tree.component';
import { TreeOption } from 'src/share/components/tree/tree.type';
import { map } from 'rxjs/operators';
import { OrganizationService } from '../organization/organization.service';

@Component({
  selector: 'nm-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccountComponent implements OnInit {

  @ViewChild("tableCom") tableCom: TableComponent;

  @ViewChild("organizationTree") organizationTree: TreeComponent;

  nodeClickSubject = new Subject();

  treeOption: TreeOption = {
    nodeClick: this.nodeClickSubject,
    data: this.organization.findAll({ index: 1, size: 0 }).pipe(map(x => x.list))
  }

  table: TableOption = {
    columns: [
      { key: 'account', title: '账号' },
      // { key: 'password', title: '密码' },
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
    private organization: OrganizationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subject()
  }

  subject() {
    this.nodeClickSubject.subscribe((x: any) => {
      this.table.query.filter.organizationId = x.id;
      this.tableCom.refresh();
    })
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
        this.router.navigate([`./${type}`], { relativeTo: this.activatedRoute });
        break;
      case 'update':
        this.router.navigate([`./${type}/${param.id}`], { relativeTo: this.activatedRoute });
        break;
    }
  }
}
