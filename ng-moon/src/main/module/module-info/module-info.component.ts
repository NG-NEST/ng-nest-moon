import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as _ from 'lodash';

@Component({
    selector: 'nm-module-info',
    templateUrl: './module-info.component.html',
    styleUrls: ['./module-info.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ModuleInfoComponent implements OnInit {

    list = [
        { name: '基本信息', icon: 'icon-home', page: './base' },
        { name: '包含页面', icon: 'icon-home', page: './pages' },
        { name: '页面关系', icon: 'icon-home', page: './pages-relation' },
    ]

    constructor(
    ) { }

    ngOnInit() {
    }

}
