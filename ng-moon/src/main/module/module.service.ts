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
}

