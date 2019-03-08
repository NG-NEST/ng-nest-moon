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
            this.pageService.findOne(id).subscribe(y => {
                this.setFormOption(y)
            })
        });

    }

    setFormOption(param) {
        this.formOption = {
            title: param.name,
            controls: _.map(param.controls, x => {
                let control;
                switch (x.type.key) {
                    case 'input':
                        control = new InputControl({ key: x.code, label: x.name, col: x.col.key })
                        break;
                }
                return control
            })
        }
    }
}
