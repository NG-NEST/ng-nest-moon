import { Component, OnInit, ViewChild } from '@angular/core';
import { FormOption, Row, ButtonsControl, SelectControl, InputControl, FindbackControl } from 'src/share/components/form/form.type';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { FormComponent } from 'src/share/components/form/form.component';
import { NavService } from 'src/services/nav.service';
import { SettingService } from 'src/services/setting.service';
import * as _ from 'lodash';
import { PageService } from '../../module.service';
import { ModuleInfoService } from '../module-info.service';

@Component({
    selector: 'nm-mi-page-info',
    templateUrl: './mi-page-info.component.html'
})
export class MiPageInfoComponent implements OnInit {

    @ViewChild('page') page: FormComponent;

    submitSubject = new Subject();

    actionsTreeNodeClickSubject = new Subject();

    getData = this.activatedRoute.paramMap.pipe(switchMap((params: ParamMap) => {
        let id = params.get('id');
        let type = params.get('type');
        if (type === 'update') {
            return this.pageService.findOne(id)
                .pipe(map(x => {
                    // x.actions = _.map(x.actions, y => { return { id: y.id, title: y.name, menuId: y.menuId } });
                    return x;
                }));
        } else {
            return Observable.create(x => { x.next({ moduleId: this.moduleInfoService.id }) });
        }
    }))

    formOption: FormOption = {
        title: '页面信息',
        controls: [
            new Row({
                hide: true, controls: [
                    new InputControl({ key: "id", label: "编号" }),
                    new InputControl({ key: "moduleId", label: "对应模块Id" }),
                ]
            }),
            new Row({
                title: '页面信息', icon: 'icon-user', controls: [
                    new InputControl({ key: "name", label: "页面名称", col: 4 }),
                    new InputControl({ key: "description", label: "描述", col: 12 }),
                ]
            })
        ],
        buttons: [
            { type: 'submit', handler: this.submitSubject }
        ],
        data: this.getData
    }

    type: string;

    constructor(
        private activatedRoute: ActivatedRoute,
        private moduleInfoService: ModuleInfoService,
        private pageService: PageService,
        private navService: NavService,
        private settingService: SettingService
    ) { }

    ngOnInit() {
        this.submitSubject.subscribe((x: any) => {
            this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
                let type = params.get('type');
                if (type === 'add') {
                    if (x.id === '') x.id = this.settingService.guid();
                    this.pageService.create(x).subscribe(y => {
                        this.navService.back(true);
                    })
                } else if (type === 'update') {
                    this.pageService.update(x).subscribe(y => {
                        this.navService.back(true);
                    })
                }
            });
        })
    }
}
