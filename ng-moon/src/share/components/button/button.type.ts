import { TooltipOption } from "../tooltip/tooltip.type";
import { Observable, Subject } from "rxjs";

export type ButtonType = 'button' | 'submit' | 'reset' | 'cancel' | 'update';
export type ButtonsType = 'button' | 'single' | 'multiple';

export interface ButtonOption {
    key?: string | number;
    type?: ButtonType;
    label?: string;
    title?: string;
    icon?: string;
    handler?: Subject<any>;
    [prop: string]: any;
}

export interface ButtonsOption {
    type?: ButtonsType;
    buttons?: ButtonOption[];
    tooltip?: TooltipOption;
    key?: string;
}