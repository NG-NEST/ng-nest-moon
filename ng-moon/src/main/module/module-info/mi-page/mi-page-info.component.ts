import { Component, OnInit, ViewChild } from '@angular/core';
import { FormOption, Row, ButtonsControl, SelectControl, InputControl, FindbackControl, AddItemControl, CheckboxControl } from 'src/share/components/form/form.type';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { FormComponent } from 'src/share/components/form/form.component';
import { NavService } from 'src/services/nav.service';
import { SettingService } from 'src/services/setting.service';
import * as _ from 'lodash';
import { PageService } from '../../module.service';
import { ModuleInfoService } from '../module-info.service';
import { GroupService } from 'src/share/components/group/group.service';

@Component({
    selector: 'nm-mi-page-info',
    templateUrl: './mi-page-info.component.html'
})
export class MiPageInfoComponent implements OnInit {

    @ViewChild('page') page: FormComponent;

    submitSubject = new Subject();

    groupSetSubject = new Subject();

    groupSubmitSubject = new Subject<any[]>();

    getData = this.activatedRoute.paramMap.pipe(switchMap((params: ParamMap) => {
        let id = params.get('id');
        let type = params.get('type');
        if (type === 'update') {
            return this.pageService.findOne(id)
                .pipe(map(x => {
                    x.controls = _.orderBy(x.controls, 'sort');
                    return x;
                }));
        } else {
            return Observable.create(x => {
                x.next({
                    id: this.settingService.guid(),
                    moduleId: this.moduleInfoService.id
                })
            });
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
                    new InputControl({ key: "code", label: "编码", col: 4 }),
                    new InputControl({ key: "description", label: "描述", col: 12 }),
                ]
            }),
            new Row({
                title: '控件', icon: 'icon-grid', controls: [
                    new AddItemControl({
                        key: "controls",
                        title: '控件',
                        width: 400,
                        buttons: [
                            {
                                label: '分组排序', handler: this.groupSetSubject
                            }
                        ],
                        form: {
                            controls: [
                                new Row({
                                    hide: true, controls: [
                                        new InputControl({ key: "id", label: "编号" }),
                                        new InputControl({ key: "pageId", label: "编号", relation: 'many-one' }),
                                    ]
                                }),
                                new Row({
                                    title: "基本信息",
                                    icon: "icon-align-justify",
                                    controls: [
                                        new InputControl({ key: "name", label: "名称", colHead: true, col: 6 }),
                                        new InputControl({ key: "code", label: "编码", colHead: true, col: 6 }),
                                        new SelectControl({
                                            key: 'type', label: '类型', data: [
                                                { key: 'input', label: '输入框' },
                                                { key: 'checkbox', label: '复选框' },
                                                { key: 'buttons', label: '按钮组' },
                                                { key: 'select', label: '下拉选择' },
                                                { key: 'findback', label: '查找带回' },
                                                { key: 'add-item', label: '添加行' }
                                            ], col: 6
                                        }),
                                        new InputControl({ key: "description", label: "描述", col: 6 })
                                    ]
                                }),
                                new Row({
                                    title: "验证",
                                    icon: "icon-alert-triangle",
                                    controls: [
                                        new CheckboxControl({ key: "required", label: "必填", width: 50, colHead: true, col: 3 }),
                                        new CheckboxControl({ key: "disabled", label: "禁用", width: 50, colHead: true, col: 3 }),
                                        new CheckboxControl({ key: "readonly", label: "只读", width: 50, colHead: true, col: 3 }),
                                    ]
                                }),
                                new Row({
                                    title: "布局样式",
                                    icon: "icon-sidebar",
                                    controls: [
                                        new SelectControl({
                                            key: 'col', label: '列宽比例', type: 'buttons', data: [
                                                { key: 1, label: '1' },
                                                { key: 2, label: '2' },
                                                { key: 3, label: '3' },
                                                { key: 4, label: '4' },
                                                { key: 5, label: '5' },
                                                { key: 6, label: '6' },
                                                { key: 7, label: '7' },
                                                { key: 8, label: '8' },
                                                { key: 9, label: '9' },
                                                { key: 10, label: '10' },
                                                { key: 11, label: '11' },
                                                { key: 12, label: '12' }
                                            ], col: 4, tooltip: {
                                                message: `<p>采用12等分的栅格布局</p>
                                                          <p>默认空，按控件默认大小设置</p>`
                                            }
                                        })
                                    ]
                                })
                            ]
                        }
                    }),
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
        private settingService: SettingService,
        private groupService: GroupService
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
        this.groupSetSubject.subscribe((x: any) => {
            let data = this.page.form.value;
            this.groupService.create({
                title: x.label, submitSubject: this.groupSubmitSubject, data: _.map(data.controls, y => {
                    y.label = y.name;
                    console.log(y)
                    return y
                })
            })
        })
        this.groupSubmitSubject.subscribe((x: any) => {
            this.page.form.patchValue({ controls: x })
        })
    }
}

export enum ColEnum {
    One = 1,
    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5,
    Six = 6,
    Seven = 7,
    Eight = 8,
    Nine = 9,
    Ten = 10,
    Eleven = 11,
    Twelve = 12
}
