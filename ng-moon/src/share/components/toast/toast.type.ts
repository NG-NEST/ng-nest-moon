import { InjectionToken } from "@angular/core";

export const TOASTOPTION = new InjectionToken<{}>('TOASTOPTION');

export interface ToastOption {
    message?: string;
    hasBackdrop?: boolean,
    backdropClass?: string,
    detach?: Function,
    width?: number;
    height?: number;
    delay?: number;
}