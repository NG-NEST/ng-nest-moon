import { Component, OnInit, ViewChild } from '@angular/core';
import { FormOption, Row, ButtonsControl, SelectControl, InputControl } from 'src/share/components/form/form.type';
import { RoleService } from '../role.service';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FormComponent } from 'src/share/components/form/form.component';
import { NavService } from 'src/services/nav.service';

@Component({
    selector: 'nm-role-info',
    templateUrl: './role-info.component.html',
    styleUrls: ['./role-info.component.scss']
})
export class RoleInfoComponent implements OnInit {

    @ViewChild('role') role: FormComponent;

    submitSubject = new Subject();

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
        private navService: NavService
    ) { }

    ngOnInit() {
        this.submitSubject.subscribe(x => {
            this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
                let type = params.get('type');
                if (type === 'add') {
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

}
