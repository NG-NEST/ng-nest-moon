import { Component, OnInit, ViewChild } from '@angular/core';
import { FormOption, Row, ButtonsControl, SelectControl, InputControl, FindbackControl, AddItemControl, CheckboxControl, Control } from 'src/share/components/form/form.type';
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
    selector: 'nm-mi-page-eye',
    templateUrl: './mi-page-eye.component.html'
})
export class MiPageEyeComponent implements OnInit {

    formOption: FormOption;
    //  = {
    // title: '模块基本信息',
    // controls: [
    //     new Row({
    //         hide: true, controls: [
    //             new InputControl({ key: "id", label: "编号" }),
    //         ]
    //     }),
    //     new Row({
    //         controls: [
    //             new InputControl({ key: "name", label: "模块名称", col: 4 }),
    //             new InputControl({ key: "code", label: "编码", col: 4 }),
    //             new InputControl({ key: "icon", label: "图标", col: 4 }),
    //             new InputControl({ key: "description", label: "描述", col: 12 })
    //         ]
    //     })
    // ],
    // // buttons: [
    // //     { type: 'submit', handler: this.submitSubject },
    // //     { type: 'update', handler: this.updateSubject }
    // // ],
    // // data: this.getData,
    // type: 'info'
    // }

    constructor(
        private activatedRoute: ActivatedRoute,
        private moduleInfoService: ModuleInfoService,
        private pageService: PageService,
        private navService: NavService,
        private settingService: SettingService
    ) { }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
            let id = params.get('id');
            this.pageService.findOne(id)
                .pipe(map(x => {
                    x.controls = _.orderBy(x.controls, 'sort');
                    return x;
                })).subscribe(y => {
                    this.setFormOption(y)
                })
        });

    }

    setFormOption(param) {
        this.formOption = {
            title: param.name,
            controls: this.setControls(param.controls)
        }
    }

    setControls(controls: []) {
        let defaultGroup: Row = new Row({ controls: [] })
        let group = _.groupBy(controls, (x: any) => {
            if (!x.group) x.group = defaultGroup
            return x.group.id
        })
        let result = _.map(group, (x: any[]) => {
            if (x.length > 0) {
                let groupItem = x[0].group;
                let row: Row = new Row({ title: groupItem.label, icon: groupItem.icon, controls: [] })
                for (let item of x) row.controls.push(this.setControl(item))
                return row;
            }
        })
        return result;
    }

    setControl(control) {
        let result;
        let ctrl = new Control<any>({
            value: control.value,
            key: control.code,
            label: control.name,
            col: control.col.key,
            primary: control.primary,
            disabled: control.disabled,
            readonly: control.readonly,
            required: control.required,
            hide: control.hide
        });
        switch (control.type.key) {
            case 'input':
                result = new InputControl(ctrl)
                break;
            case 'checkbox':
                result = new CheckboxControl(ctrl)
                break;
            case 'buttons':
                result = new ButtonsControl(ctrl)
                break;
            case 'select':
                result = new SelectControl(ctrl)
                break;
            case 'findback':
                result = new FindbackControl(ctrl)
                break;
            case 'add-item':
                result = new AddItemControl(ctrl)
                break;
        }
        return result
    }
}
