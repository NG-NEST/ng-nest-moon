import {
    Component, OnInit, HostBinding, ElementRef, Renderer2
} from '@angular/core';
import { ControlOption, FormOption } from './form.type';
import { FormGroup } from '@angular/forms';
import { SettingService } from 'src/services/setting.service';

@Component({
    selector: 'nm-control',
    templateUrl: './control.component.html',
    styleUrls: ['./control.component.scss'],
    inputs: ['option', 'form', 'formOption']
})
export class ControlComponent implements OnInit {

    option: ControlOption;

    formOption: FormOption;

    form: FormGroup;

    @HostBinding('class.info') get info() { return this.formOption.type == 'info' }

    @HostBinding('class.required') get required() { return this.option.required }

    @HostBinding('class.disabled') get disabled() { return this.option.disabled }

    @HostBinding('class.hide') get hide() { return this.option.hide }

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
        this.setting.mapToObject(this._default, this.option)
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
