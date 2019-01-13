import { Component, OnInit, ViewChild } from '@angular/core';
import { FormOption, Row, ButtonsControl, SelectControl, InputControl, FindbackControl } from 'src/share/components/form/form.type';
import { AccountService } from '../account.service';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { FormComponent } from 'src/share/components/form/form.component';
import { NavService } from 'src/services/nav.service';
import { RoleService } from '../../role/role.service';
import * as _ from 'lodash';

@Component({
    selector: 'nm-account-info',
    templateUrl: './account-info.component.html',
    styleUrls: ['./account-info.component.scss'],
    providers: [RoleService]
})
export class AccountInfoComponent implements OnInit {

    @ViewChild('account') account: FormComponent;

    submitSubject = new Subject();

    getData = this.activatedRoute.paramMap.pipe(switchMap((params: ParamMap) => {
        let id = params.get('id');
        let type = params.get('type');
        if (type === 'update') {
            return this.accountService.findOne(id)
                .pipe(map(x => {
                    x.roles = _.map(x.roles, y => { return { id: y.id, title: y.name } });
                    return x;
                }));
        } else {
            return Observable.create();
        }
    }))

    formOption: FormOption = {
        title: '账号信息',
        controls: [
            new Row({
                hide: true, controls: [
                    new InputControl({ key: "id", label: "编号" }),
                ]
            }),
            new Row({
                title: '基本信息', icon: 'icon-user', controls: [
                    new InputControl({ key: "account", label: "账号", col: 4 }),
                    new InputControl({ key: "password", label: "密码", col: 4 }),
                    new InputControl({ key: "name", label: "姓名", col: 4 }),
                    new InputControl({ key: "email", label: "邮箱", col: 4 }),
                    new InputControl({ key: "phone", label: "手机号", col: 4 })
                ]
            }),
            new Row({
                title: '角色', icon: 'icon-triangle', controls: [
                    new FindbackControl({
                        key: "roles", col: 12, title: '选择角色',
                        type: 'multiple',
                        table: {
                            columns: [
                                { key: 'title', title: '角色名称' },
                            ],
                            data: this.getRolesData().pipe(map(x => {
                                x.list = _.map(x.list, y => { return { id: y.id, title: y.name } })
                                return x
                            })),
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
        private accountService: AccountService,
        private navService: NavService,
        private roleService: RoleService
    ) { }

    ngOnInit() {
        this.submitSubject.subscribe(x => {
            this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
                // console.log(this.account)
                let type = params.get('type');
                if (type === 'add') {
                    this.accountService.create(x).subscribe(y => {
                        this.navService.back(true);
                    })
                } else if (type === 'update') {
                    this.accountService.update(x).subscribe(y => {
                        this.navService.back(true);
                    })
                }
            });
        })
    }

    getRolesData(): Observable<any> {
        return Observable.create(x => {
            let rolesControl = _.find(this.account.controls, x => x.key == 'roles') as any;
            this.roleService.findAll(rolesControl.table.query).subscribe(y => {
                x.next(y);
            })
        })
    }

}
