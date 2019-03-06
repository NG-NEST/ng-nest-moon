import {
    Component, OnInit, ViewEncapsulation, HostListener, ElementRef, forwardRef, ViewChild, Renderer2
} from '@angular/core';
import { SelectService } from './select.service';
import { OverlayRef } from '@angular/cdk/overlay';
import { SelectOption, SelectPortalOption, Select } from './select.type';
import { NG_VALUE_ACCESSOR, FormGroup } from '@angular/forms';
import { noop, Subject } from 'rxjs';
import { SettingService } from 'src/services/setting.service';
import { filter } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
    selector: 'nm-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    encapsulation: ViewEncapsulation.None,
    inputs: ['option', 'form'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SelectComponent),
        multi: true,
    }]
})
export class SelectComponent implements OnInit {

    option: SelectOption;

    form: FormGroup;

    @ViewChild("select") select: ElementRef;

    private _default: SelectOption = {
        type: 'list',
        showType: 'click',
        placeholder: '请选择'
    }

    private _selectOverlayRef: OverlayRef;

    private _value: any;
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    get value(): any {
        return this._value;
    };

    set value(val: any) {
        if (val !== this._value) {
            this._value = val;
            if (this.form) this.setting.setFormValue(this.form, this.option.key, val);
            this.onChangeCallback(val);
        }
    }

    private _portalOption: SelectPortalOption = {
        connectRef: this.elementRef,
        valueChange: new Subject<any>()
    };
    get portalOption(): SelectPortalOption {
        return this._portalOption;
    }
    set portalOption(val: SelectPortalOption) {
        Object.assign(this._portalOption, val);
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
        this.onTouchedCallback = fn;
    }

    constructor(
        private elementRef: ElementRef,
        private selectService: SelectService,
        private renderer: Renderer2,
        private setting: SettingService
    ) { }

    ngOnInit() {
        this.setting.mapToObject(this._default, this.option)
        Object.assign(this.portalOption, this.option);
        this.portalOption.valueChange.subscribe(x => {
            this.value = x;
        });
        if (this.option.showType === 'hover') {
            this.renderer.listen(this.select.nativeElement, "mouseenter", () => {
                if (this.portalOption.leaveTimeout) clearTimeout(this.portalOption.leaveTimeout);
                if (!(this._selectOverlayRef && this._selectOverlayRef.hasAttached())) {
                    this._selectOverlayRef = this.selectService.create(this.portalOption);
                    this.portalOption.value = this.value;
                }
            })
            this.renderer.listen(this.select.nativeElement, "mouseleave", () => {
                if (this.portalOption.leaveTimeout) clearTimeout(this.portalOption.leaveTimeout);
                this.portalOption.leaveTimeout = setTimeout(() => {
                    if (this._selectOverlayRef.hasAttached()) {
                        this._selectOverlayRef.detach();
                        this._selectOverlayRef.dispose();
                        this._selectOverlayRef = null;
                    }
                }, 100);
            })
        } else if (this.option.showType === 'click') {
            this.renderer.listen(this.select.nativeElement, "click", () => {
                if (!(this._selectOverlayRef && this._selectOverlayRef.hasAttached())) {
                    this._selectOverlayRef = this.selectService.create(this.portalOption);
                    this.portalOption.value = this.value;
                }
            })
        }
        if (this.form) this.form.valueChanges.pipe(filter(x => _.has(x, this.option.key))).subscribe(x => {
            this.value = x[this.option.key];
        })
    }

}
