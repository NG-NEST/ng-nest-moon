import { Observable, Subject } from "rxjs";
import { Query } from "src/services/repository.service";

export type SelectType = 'single' | 'multiple';

export interface TableOption {

    columns?: TableColumn[];

    operations?: TableOperation[];

    data?: Observable<any> | [];

    query?: Query;

    querySub?: Subject<any>;

    selectType?: SelectType;

    selectSub?: Subject<any>;

    selectedSub?: Subject<any>;

    initRequestData?: boolean;
}

export interface TableColumn {

    key?: string;

    title?: string;

    hidden?: boolean;
}

export interface TableOperation {

    icon?: string;

    action?: string;

    handler?(param: any): any;
}