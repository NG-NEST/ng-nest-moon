import { Component, OnInit, ViewChild } from '@angular/core';
import { TableOption } from 'src/share/components/table/table.type';
import { Observable } from 'rxjs';
import { RoleService } from './role.service';
import { TableComponent } from 'src/share/components/table/table.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nm-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  @ViewChild("tableCom") tableCom: TableComponent;

  table: TableOption = {
    columns: [
      { key: 'name', title: '角色名称' },
    ],
    operations: [
      { icon: 'icon-edit-2', handler: (x) => this.update(x) },
      { icon: 'icon-trash-2', handler: (x) => this.remove(x) }
    ],
    data: this.getData()
  }

  constructor(
    private role: RoleService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

  }

  update(param) {
    this.action('update', param);
  }

  remove(param) {
    this.role.remove(param.id).subscribe(x => {
      this.tableCom.refresh();
    });
  }

  getData(): Observable<any> {
    return Observable.create(x => {
      this.role.findAll(this.table.query).subscribe(y => {
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
