import { Injectable } from '@angular/core';
import { HttpService } from 'src/services/http.service';
import { ModuleService } from '../module.service';

@Injectable()
export class ModuleInfoService extends ModuleService {

    id: string;

    type: string;

    itemResult = {
        name: '模块名称',
        description: '模块描述',
        updateTime: ''
    };

    constructor(public http: HttpService) {
        super(http);
    }
}

