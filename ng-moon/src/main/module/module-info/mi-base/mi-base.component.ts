import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { FormComponent } from 'src/share/components/form/form.component';
import { FormOption, Row, InputControl } from 'src/share/components/form/form.type';
import { Subject, Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NavService } from 'src/services/nav.service';
import { SettingService } from 'src/services/setting.service';
import { map, switchMap } from 'rxjs/operators';
import { ModuleInfoService } from '../module-info.service';

@Component({
    selector: 'nm-mi-base',
    templateUrl: './mi-base.component.html',
    styleUrls: ['./mi-base.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MiBaseInfoComponent implements OnInit {

    @ViewChild('base') base: FormComponent;

    submitSubject = new Subject();

    updateSubject = new Subject();

    getData = this.activatedRoute.paramMap.pipe(switchMap((params: ParamMap) => {
        if (this.moduleInfoService.type !== 'add') {
            return this.moduleInfoService.findOne(this.moduleInfoService.id)
                .pipe(map(x => {
                    this.moduleInfoService.itemResult = x;
                    // x.actions = _.map(x.actions, y => { return { id: y.id, title: y.name, menuId: y.menuId } });
                    return x;
                }));
        } else {
            return Observable.create();
        }
    }))

    formOption: FormOption = {
        title: '模块基本信息',
        controls: [
            new Row({
                hide: true, controls: [
                    new InputControl({ key: "id", label: "编号" }),
                ]
            }),
            new Row({
                controls: [
                    new InputControl({ key: "name", label: "模块名称", col: 4 }),
                    new InputControl({ key: "icon", label: "图标", col: 4 }),
                    new InputControl({ key: "description", label: "描述", col: 12 })
                ]
            })
        ],
        buttons: [
            { type: 'submit', handler: this.submitSubject },
            { type: 'update', handler: this.updateSubject }
        ],
        data: this.getData,
        type: 'info'
    }

    constructor(
        private activatedRoute: ActivatedRoute,
        private moduleInfoService: ModuleInfoService,
        private navService: NavService,
        private settingService: SettingService
    ) { }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(x => {
            if (this.moduleInfoService.type) this.formOption.type = this.moduleInfoService.type;
        })
        this.submitSubject.subscribe((x: any) => {
            this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
                if (this.moduleInfoService.type === 'add') {
                    if (x.id === '') x.id = this.settingService.guid();
                    this.moduleInfoService.create(x).subscribe(y => {
                        this.moduleInfoService.itemResult = y
                        this.formOption.type = 'info';
                    })
                } else if (this.moduleInfoService.type === 'update') {
                    this.moduleInfoService.update(x).subscribe(y => {
                        this.moduleInfoService.itemResult = y;
                        this.formOption.type = 'info';
                    })
                }
            });
        })
        this.updateSubject.subscribe((x: any) => {
            this.moduleInfoService.type = 'update'
        })
    }
}
