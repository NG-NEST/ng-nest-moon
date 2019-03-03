import { InputType, InputOption } from "../input/input.type";
import { ButtonOption, ButtonsOption } from "../button/button.type";
import { Select, SelectOption } from "../select/select.type";
import { Observable } from "rxjs";
import { Findback, FindbackOption } from "../findback/findback.type";
import { AddItem, AddItemOption } from "../add-item/add-item.type";
import { CheckboxOption } from "../checkbox/checkbox.type";

export type ColType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 12;

export type ControlType = 'input' | 'checkbox' | 'buttons' | 'select' | 'findback' | 'add-item';

export type ControlsType = 'controls' | 'row';

export type TitleLayout = 'left' | 'top';

export type FormType = 'add' | 'update' | 'info' | any;

export interface FormOption {
    title?: string;
    titleLayout?: TitleLayout;
    col?: ColType;
    controls?: Control<any>[] | Row[];
    buttons?: ButtonOption[];
    data?: Observable<any>;
    type?: FormType;
    isOnePage?: boolean; 
    hoverActions?: FormType[];
}

export interface RowI {
    title?: string;
    icon?: string;
    hide?: boolean;
    controls?: Control<any>[];
}

export class Row {
    title?: string;
    icon?: string;
    hide?: boolean;
    controls?: Control<any>[];
    constructor(option: RowI = {}) {
        Object.assign(this, option)
    }
}

export interface ControlOption extends ControlI<any> { };

export interface ControlI<T> {
    value?: T;
    key?: string;
    label?: string;
    controlType?: ControlType;
    col?: ColType;
    [property: string]: any;
}

export class Control<T> {
    value: T;
    key: string;
    label: string;
    controlType: ControlType;
    col: ColType;
    [property: string]: any;
    constructor(option: ControlI<T> = {}) {
        Object.assign(this, option)
    }
}

export interface InputControlOption extends ControlI<string | number>, InputOption { }

export class InputControl extends Control<string | number> {
    controlType: ControlType = 'input';
    type: InputType = 'text';
    constructor(option: InputControlOption = {}) {
        super(option);
        Object.assign(this, option);
        if (typeof (this.value) == 'undefined') this.value = '';
    }
}

export interface CheckboxControlOption extends ControlI<boolean>, CheckboxOption { }

export class CheckboxControl extends Control<boolean> {
    controlType: ControlType = 'checkbox';
    constructor(option: CheckboxControlOption = {}) {
        super(option);
        Object.assign(this, option);
        if (typeof (this.value) == 'undefined') this.value = false;
    }
}

export interface SelectControlOption extends ControlI<Select | Select[]>, SelectOption { }

export class SelectControl extends Control<Select | Select[]>{
    controlType: ControlType = 'select';
    constructor(option: SelectControlOption = {}) {
        super(option);
        Object.assign(this, option)
    }
}

export interface ButtonsControlOption extends ControlI<ButtonOption | ButtonOption[]>, ButtonsOption { }

export class ButtonsControl extends Control<ButtonOption | ButtonOption[]>{
    controlType: ControlType = 'buttons';
    constructor(option: ButtonsControlOption = {}) {
        super(option);
        Object.assign(this, option)
    }
}

export interface FindbackControlOption extends ControlI<Findback | Findback[]>, FindbackOption { }

export class FindbackControl extends Control<Findback | Findback[]> {
    controlType: ControlType = 'findback';
    constructor(option: FindbackControlOption = {}) {
        super(option);
        Object.assign(this, option);
    }
}

export interface AddItemControlOption extends ControlI<AddItem | AddItem[]>, AddItemOption { }

export class AddItemControl extends Control<AddItem | AddItem[]> {
    controlType: ControlType = 'add-item';
    constructor(option: AddItemControlOption = {}) {
        super(option);
        Object.assign(this, option);
    }
}
