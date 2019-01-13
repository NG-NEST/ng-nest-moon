import { InjectionToken, ElementRef } from "@angular/core";
import { PortalOption } from "../portal/portal.type";
import { ButtonOption } from "../button/button.type";
import { Subject } from "rxjs";
import { TooltipOption } from "../tooltip/tooltip.type";

export const SELECTPORTALOPTION = new InjectionToken<{}>('SELECTPORTALOPTION');

export type SelectType = 'list' | 'buttons';

export type ShowType = 'hover' | 'click';

export interface SelectOption extends PortalOption {
    label?: string;
    type?: SelectType;
    showType?: ShowType;
    data?: Select[];
    placeholder?: string;
    tooltip?: TooltipOption;
    key?: string;
}

export interface Select extends ButtonOption {
    data?: Select[]
}

export interface SelectPortalOption extends SelectOption {
    connectRef?: ElementRef;
    leaveTimeout?: any;
    valueChange?: Subject<any>;
    value?: any;
    data?: Select[];
}