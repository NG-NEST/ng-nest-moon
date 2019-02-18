import { Component, OnInit, ViewEncapsulation, forwardRef } from '@angular/core';
import * as _ from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { ModuleInfoService } from './module-info.service';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'nm-module-info',
    templateUrl: './module-info.component.html',
    styleUrls: ['./module-info.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        ModuleInfoService,
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ModuleInfoComponent),
            multi: true
        }
    ]
})
export class ModuleInfoComponent implements OnInit {

    list = [
        { name: '基本信息', icon: 'icon-home', page: './base' },
        { name: '包含页面', icon: 'icon-home', page: './pages' },
        { name: '页面关系', icon: 'icon-home', page: './pages-relation' },
    ]

    constructor(
        private activatedRoute: ActivatedRoute,
        private moduleInfoService: ModuleInfoService
    ) { }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(x => {
            this.moduleInfoService.id = x.get('id');
            this.moduleInfoService.type = x.get('type');
        })
    }

}
