import { InjectionToken } from "@angular/core";
import { PortalOption } from "../portal/portal.type";

export const GROUPOPTION = new InjectionToken<{}>('GROUPOPTION');

export interface GroupOption extends PortalOption {
    label?: string;
    key?: string;
}