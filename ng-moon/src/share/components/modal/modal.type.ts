import { InjectionToken, TemplateRef } from "@angular/core";
import { PortalOption } from "../portal/portal.type";

export const MODALOPTION = new InjectionToken<{}>('MODALOPTION');

export interface ModalOption extends PortalOption {
    title?: string;
    templateRef?: TemplateRef<any>;
}