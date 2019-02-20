import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
import { NavService } from 'src/services/nav.service';
import { SettingService } from 'src/services/setting.service';
import { PageService } from '../../module.service';
import { TableComponent } from 'src/share/components/table/table.component';
import { TableOption } from 'src/share/components/table/table.type';
import { Observable } from 'rxjs';
import { ModuleInfoService } from '../module-info.service';

@Component({
    selector: 'nm-mi-page',
    templateUrl: './mi-page.component.html',
    encapsulation: ViewEncapsulation.None
})
export class MiPageComponent implements OnInit {

    @ViewChild("tableCom") tableCom: TableComponent;

    table: TableOption = {
        columns: [
            { key: 'name', title: '页面名称' },
            { key: 'code', title: '编码' },
            { key: 'description', title: '描述' }
        ],
        operations: [
            { icon: 'icon-edit-2', handler: (x) => this.update(x) },
            { icon: 'icon-trash-2', handler: (x) => this.remove(x) }
        ],
        data: this.getData()
    }

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private moduleInfoService: ModuleInfoService,
        private pageService: PageService,
        private navService: NavService,
        private settingService: SettingService
    ) { }

    ngOnInit() {
        
    }

    update(param) {
        this.action('update', param);
    }

    remove(param) {
        this.pageService.remove(param.id).subscribe(x => {
            this.tableCom.refresh();
        });
    }

    getData(): Observable<any> {
        return Observable.create(x => {
            this.table.query.filter.moduleId = this.moduleInfoService.id;
            this.pageService.findAll(this.table.query).subscribe(y => {
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
