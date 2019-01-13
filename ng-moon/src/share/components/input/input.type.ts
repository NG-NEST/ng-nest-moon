import { TooltipOption } from "../tooltip/tooltip.type";
import { FormGroup } from "@angular/forms";

export type InputType = 'text' | 'password' | 'number';
export type InputLayout = 'horizontal' | 'vertical';
export type InputIconLayout = 'icon-left' | 'icon-right';

export interface InputOption{
    /**
     * 布局方式
     */
    layout?: InputLayout;
    /**
     * 标题
     */
    label?: string;
    /**
     * 类型
     */
    type?: InputType;
    /**
     * 提示信息
     */
    placeholder?: string;
    /**
     * 必填
     */
    required?: boolean;
    /**
     * 图标
     */
    icon?: string;
    /**
     * 图标位置
     */
    iconLayout?: InputIconLayout;

    tooltip?: TooltipOption;

    key?: string;
}