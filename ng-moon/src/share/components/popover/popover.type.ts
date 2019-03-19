import { InjectionToken, ElementRef } from "@angular/core";
import { PortalOption } from "../portal/portal.type";
import { Observable, Subject } from "rxjs";

export const POPOVEROPTION = new InjectionToken<{}>('POPOVEROPTION');

export interface PopoverOption extends PortalOption {
    connectRef: ElementRef,
    menus: PopoverMenu[]
}

export interface PopoverMenu {
    icon?: string;
    type?: string;
    title?: string;
    handler?: Observable<any> | Subject<any> | Function;
}