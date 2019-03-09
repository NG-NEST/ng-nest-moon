import { InjectionToken } from "@angular/core";
import { PortalOption } from "../portal/portal.type";
import { Observable } from "rxjs";

export const GROUPOPTION = new InjectionToken<{}>('GROUPOPTION');

export interface GroupOption extends PortalOption {
    title?: string;
    data?: Observable<GroupItem[]> | GroupItem[];
}

export interface GroupItem {
    id?: string;
    label?: string;
    isDashed?: boolean;
    data?: GroupItem[];
}