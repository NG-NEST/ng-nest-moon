import { InjectionToken, ElementRef } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { TooltipOption } from "../tooltip/tooltip.type";
import { ModalOption } from "../modal/modal.type";
import { SelectType, TableOption } from "../table/table.type";
import { TreeOption } from "../tree/tree.type";

export const FINDBACKMODALOPTION = new InjectionToken<{}>('FINDBACKMODALOPTION');

export enum LayoutType { Table = 'table', Tree = 'tree', TreeAndTable = 'treeAndTable' }

export interface FindbackOption extends ModalOption {
    label?: string;
    type?: SelectType;
    layoutType?: LayoutType;
    data?: Observable<Findback[]>;
    tree?: TreeOption;
    tableRelation?: string;
    table?: TableOption;
    placeholder?: string;
    tooltip?: TooltipOption;
    key?: string;
}

export interface Findback {
    id?: string;
    label?: string;
}

export interface FindbackModalOption extends FindbackOption {
    connectRef?: ElementRef;
    leaveTimeout?: any;
    valueChange?: Subject<any>;
    value?: any;
}