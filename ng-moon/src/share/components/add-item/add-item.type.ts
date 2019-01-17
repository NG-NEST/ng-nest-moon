import { InjectionToken, ElementRef } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { TooltipOption } from "../tooltip/tooltip.type";
import { ModalOption } from "../modal/modal.type";
import { FormOption } from "../form/form.type";
import { ButtonOption } from "../button/button.type";

export const ADDITEMMODALOPTION = new InjectionToken<{}>('ADDITEMMODALOPTION');

export type ActionType = 'add' | 'update' | 'remove';

export interface AddItemOption extends ModalOption {
    label?: string;
    data?: Observable<AddItem[]>;
    form?: FormOption;
    buttons?: ButtonOption[];
    placeholder?: string;
    tooltip?: TooltipOption;
    key?: string;
    width?: number;
}

export interface AddItem {
    id?: string;
    title?: string;
}

export interface AddItemModalOption extends AddItemOption {
    connectRef?: ElementRef;
    leaveTimeout?: any;
    valueChange?: Subject<any>;
    value?: any;
}