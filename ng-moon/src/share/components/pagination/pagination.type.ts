import { ResultList, Query } from "src/services/repository.service";
import { Subject } from "rxjs";

export type HandlerType = 'next' | 'previous'

export interface PaginationOption extends ResultList<any> {
    handler?: Subject<PaginationResult>;
}

export interface PaginationResult {
    handlerType?: HandlerType;
    query?: Query
}