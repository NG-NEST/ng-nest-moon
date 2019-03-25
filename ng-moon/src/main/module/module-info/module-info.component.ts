import { Component, OnInit, forwardRef, ViewEncapsulation } from '@angular/core';
import * as _ from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { ModuleInfoService } from './module-info.service';
import { PageService, TableService } from '../module.service';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'nm-module-info',
    templateUrl: './module-info.component.html',
    styleUrls: ['./module-info.component.scss'],
    providers: [
        ModuleInfoService,
        PageService,
        TableService,
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ModuleInfoComponent),
            multi: true
        }
    ],
    encapsulation: ViewEncapsulation.None
})
export class ModuleInfoComponent implements OnInit {

    list = [
        { name: '基本信息', icon: 'icon-zap', page: './base' },
        { name: '实体设计', icon: 'icon-slack', page: './entity' },
        { name: '包含页面', icon: 'icon-file-text ', page: './page' },
        { name: '页面关系', icon: 'icon-layers', page: './page-relation' },
    ]

    constructor(
        private activatedRoute: ActivatedRoute,
        public moduleInfoService: ModuleInfoService
    ) { }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(x => {
            this.moduleInfoService.id = x.get('id');
            this.moduleInfoService.type = x.get('type');
        })
    }

}
