import {
    Component, OnInit, HostBinding, ElementRef, Renderer2, forwardRef, ViewEncapsulation
} from '@angular/core';
import { ControlOption, FormOption } from './form.type';
import { FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SettingService } from 'src/services/setting.service';
import { noop } from 'rxjs';

@Component({
    selector: 'nm-control',
    templateUrl: './control.component.html',
    styleUrls: ['./control.component.scss'],
    inputs: ['option', 'form', 'formOption'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ControlComponent),
        multi: true,
    }],
    encapsulation: ViewEncapsulation.None
})
export class ControlComponent implements OnInit, ControlValueAccessor {

    option: ControlOption;

    formOption: FormOption;

    form: FormGroup;

    @HostBinding('class.info') get info() { return this.formOption && this.formOption.type == 'info' }

    @HostBinding('class.required') get required() { return this.option.required }

    @HostBinding('class.disabled') get disabled() { return this.option.disabled }

    @HostBinding('class.hide') get hide() { return this.option.hide }

    private _value: any;
    private onChangeCallback: (_: any) => void = noop;

    get value(): any {
        return this._value;
    };

    set value(val: any) {
        if (val !== this._value) {
            this._value = val;
            this.onChangeCallback(val);
        }
    }

    writeValue(val: any): void {
        if (val !== this._value) {
            this._value = val;
        }
    }

    registerOnChange(fn: any): void {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any): void {
    }

    private _default: ControlOption = {
        col: 12,
        required: false
    }

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
        private setting: SettingService
    ) { }

    ngOnInit() {
        this.setting.mapToObject(this._default, this.option);
        this.setClass();
        this.setControl();
    }

    setClass() {
        this.renderer.addClass(this.elementRef.nativeElement, `col-${this.option.col}`);
    }

    setControl() {
        if (this.option.primary) this.option.value = this.setting.guid();
    }

}
