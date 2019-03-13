import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
    selector: 'nm-mi-entity',
    styleUrls: ['./mi-entity.component.scss'],
    templateUrl: './mi-entity.component.html'
})
export class MiEntityComponent implements OnInit {

    data = [
        { id: '1', label: '编号', key: 'id', type: 'varchar', length: 36, primary: true },
        { id: '2', label: '账号', key: 'account', type: 'varchar', length: 32 },
        { id: '3', label: '密码', key: 'password', type: 'varchar', length: 64 },
        { id: '4', label: '姓名', key: 'name', type: 'varchar', length: 64 },
        { id: '5', label: '邮箱', key: 'email', type: 'varchar', length: 64 },
        { id: '6', label: '手机号', key: 'phone', type: 'char', length: 11 },
        { id: '7', label: '角色', key: 'roles' },
        { id: '8', label: '组织机构', key: 'organizations' }

    ]

    constructor(
    ) { }

    ngOnInit() {

    }
}
