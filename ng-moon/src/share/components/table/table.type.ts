import { Observable, Subject } from "rxjs";
import { Query } from "src/services/repository.service";
import { Control } from "../form/form.type";

export type SelectType = 'single' | 'multiple';

export type TableType = 'info' | 'update'

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

    type?: TableType;
}

export interface TableColumn {

    key?: string;

    title?: string;

    hidden?: boolean;

    width?: string | number;

    control?: Control<any>;
}

export interface TableOperation {

    icon?: string;

    action?: string;

    title?: string; 

    handler?(param: any): any;
}