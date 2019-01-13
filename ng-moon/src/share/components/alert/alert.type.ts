import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export const ALERTOPTION = new InjectionToken<{}>('ALERTOPTION');

export interface AlertOption {
    title?: string;
    content?: string;
    sure?: Observable<boolean>;
    hasBackdrop?: boolean,
    backdropClass?: string,
    detach?: Function,
    width?: number;
    height?: number;
}