import { Observable, Subject } from "rxjs";
import { Query } from "src/services/repository.service";

export type SelectType = 'single' | 'multiple';

export interface TableOption {

    columns?: TableColumn[];

    operations?: TableOperation[];

    data?: Observable<any>;

    query?: Query;

    querySub?: Subject<any>;

    selectType?: SelectType;

    selectSub?: Subject<any>;

    selectedSub?: Subject<any>;
}

export interface TableColumn {

    key?: string;

    title?: string;
}

export interface TableOperation {

    icon?: string;

    handler?(param: any): any;
}