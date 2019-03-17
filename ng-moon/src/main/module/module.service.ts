import { Injectable } from '@angular/core';
import { HttpService } from 'src/services/http.service';
import { RepositoryService } from 'src/services/repository.service';

@Injectable()
export class ModuleService extends RepositoryService {

    constructor(public http: HttpService) {
        super(http, { controller: { name: "modules" } });
    }
}

@Injectable()
export class PageService extends RepositoryService {

    constructor(public http: HttpService) {
        super(http, { controller: { name: "pages" } });
    }

    findByCode(param: { moduleCode: string, pageCode: string }) {
        return this.http.get(`${this.option.controller.name}/findByCode/${param.moduleCode}/${param.pageCode}`)
    }
}


@Injectable()
export class TableService extends RepositoryService {

    constructor(public http: HttpService) {
        super(http, { controller: { name: "tables" } });
    }

    findByCode(param: { moduleCode: string, tableCode: string }) {
        return this.http.get(`${this.option.controller.name}/findByCode/${param.moduleCode}/${param.tableCode}`)
    }
}

