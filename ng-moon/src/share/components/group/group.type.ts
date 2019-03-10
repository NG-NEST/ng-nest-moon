import { InjectionToken, TemplateRef } from "@angular/core";
import { PortalOption } from "../portal/portal.type";
import { Observable, Subject } from "rxjs";
import { FormOption } from "../form/form.type";
import { ButtonOption } from "../button/button.type";
import { ModalOption } from "../modal/modal.type";

export const GROUPOPTION = new InjectionToken<{}>('GROUPOPTION');

export interface GroupOption extends PortalOption {
    title?: string;
    data?: Observable<GroupItem[]> | GroupItem[];
    submitSubject?: Subject<GroupItem[]>;
    addGroupOption?: AddGroupOption;
}

export interface GroupItem {
    id?: string;
    label?: string;
    data?: GroupItem[];
    group?: GroupItem;
    [prop: string]: any;
}

export interface AddGroupOption extends ModalOption {
    form?: FormOption;
    buttons?: ButtonOption[];
}