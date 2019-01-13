import { InjectionToken, ElementRef } from "@angular/core";
import { PortalOption } from "../portal/portal.type";

export const TOOLTIPPORTALOPTION = new InjectionToken<{}>('TOOLTIPPORTALOPTION');

export interface TooltipOption extends PortalOption {
    message?: string;
}

export interface TooltipPortalOption extends TooltipOption {
    connectRef: ElementRef
}