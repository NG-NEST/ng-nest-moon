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
import { MenuService, ActionService } from '../../menu/menu.service';

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
                .pipe(map(x => {
                    x.actions = _.map(x.actions, y => { return { id: y.id, label: y.name, menuId: y.menuId } });
                    return x;
                }));
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
                        tableRelation: 'menuId',
                        table: {
                            columns: [
                                { key: 'label', title: '菜单功能' }
                            ],
                            data: this.getActionsData(),
                            query: {
                                index: 1,
                                size: 0,
                                filter: {}
                            },
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
        private menuService: MenuService,
        private actionService: ActionService
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
    }

    getActionsData(): Observable<any> {
        return Observable.create(x => {
            let actionsControl = _.find(this.role.controls, x => x.key == 'actions') as any;
            this.actionService.findAll(actionsControl.table.query).pipe(map(x => {
                x.list = _.map(x.list, y => { return { id: y.id, label: y.name, menuId: y.menuId } })
                return x
            })).subscribe(y => {
                x.next(y);
            })
        })
    }

}
