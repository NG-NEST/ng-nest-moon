import { Injectable } from '@angular/core';
import { HttpService } from 'src/services/http.service';
import { RepositoryService } from 'src/services/repository.service';

@Injectable()
export class MenuService extends RepositoryService {

    constructor(public http: HttpService) {
        super(http, { controller: { name: "menus" } });
    }
}

@Injectable()
export class ActionService extends RepositoryService {

    constructor(public http: HttpService) {
        super(http, { controller: { name: "actions" } });
    }

    findByMenuId(id){
        return this.http.get(`${this.option.controller.name}/findByMenuId/${id}`);
    }
}

