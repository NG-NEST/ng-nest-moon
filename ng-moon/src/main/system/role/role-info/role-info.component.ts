import { Component, OnInit, ViewChild } from '@angular/core';
import { FormOption, Row, ButtonsControl, SelectControl, InputControl, FindbackControl } from 'src/share/components/form/form.type';
import { RoleService } from '../role.service';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { FormComponent } from 'src/share/components/form/form.component';
import { NavService } from 'src/services/nav.service';
import { SettingService } from 'src/services/setting.service';
import * as _ from 'lodash';
import { MenuService } from '../../menu/menu.service';

@Component({
    selector: 'nm-role-info',
    templateUrl: './role-info.component.html',
    styleUrls: ['./role-info.component.scss']
})
export class RoleInfoComponent implements OnInit {

    @ViewChild('role') role: FormComponent;

    submitSubject = new Subject();

    actionsTreeNodeClickSubject = new Subject();

    getData = this.activatedRoute.paramMap.pipe(switchMap((params: ParamMap) => {
        let id = params.get('id');
        let type = params.get('type');
        if (type === 'update') {
            return this.roleService.findOne(id)
        } else {
            return Observable.create();
        }
    }))

    formOption: FormOption = {
        title: '角色信息',
        controls: [
            new Row({
                hide: true, controls: [
                    new InputControl({ key: "id", label: "编号" }),
                ]
            }),
            new Row({
                title: '基本信息', icon: 'icon-user', controls: [
                    new InputControl({ key: "name", label: "角色名称", col: 4 }),
                ]
            }),
            new Row({
                title: '菜单功能', icon: 'icon-triangle', controls: [
                    new FindbackControl({
                        key: "actions", col: 12, title: '选择菜单功能',
                        type: 'multiple',
                        tree: {
                            nodeClick: this.actionsTreeNodeClickSubject,
                            data: this.menuService.findAll({ index: 1, size: 0 }).pipe(map(x => x.list))
                        },
                        table: {
                            columns: [
                                { key: 'title', title: '菜单功能' },
                            ],
                            data: this.getActionsData(),
                            selectType: 'multiple'
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
        private roleService: RoleService,
        private navService: NavService,
        private settingService: SettingService,
        private menuService: MenuService
    ) { }

    ngOnInit() {
        this.submitSubject.subscribe((x: any) => {
            this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
                let type = params.get('type');
                if (type === 'add') {
                    if (x.id === '') x.id = this.settingService.guid();
                    this.roleService.create(x).subscribe(y => {
                        this.navService.back(true);
                    })
                } else if (type === 'update') {
                    this.roleService.update(x).subscribe(y => {
                        this.navService.back(true);
                    })
                }
            });
        })
        this.actionsTreeNodeClickSubject.subscribe(x => {
            console.log(x);
        })
    }

    getActionsData(): Observable<any> {
        return Observable.create(x => {
            let menusControl = _.find(this.role.controls, x => x.key == 'actions') as any;
            this.menuService.findAll(menusControl.table.query).pipe(map(x => {
                x.list = _.map(x.list, y => { return { id: y.id, title: y.label } })
                return x
            })).subscribe(y => {
                x.next(y);
            })
        })
    }

}
