import {
  Component, OnInit, ViewEncapsulation, HostBinding, HostListener, forwardRef
} from '@angular/core';
import { CheckboxOption } from './checkbox.type';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormGroup } from '@angular/forms';
import { noop } from 'rxjs';
import { SettingService } from 'src/services/setting.service';
import { FormOption } from '../form/form.type';
import { filter } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'nm-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  inputs: ['option', 'form', 'formOption'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true,
  }]
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {

  option: CheckboxOption;

  formOption: FormOption;

  form: FormGroup

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

  private _default: CheckboxOption = {
  }

  @HostListener('click', ['$event']) click(event: Event) {
    event.preventDefault();
    this.value = !this.value;
  }

  @HostBinding('class.checked') get checked() {
    return this.value;
  }

  constructor(private setting: SettingService) { }

  ngOnInit() {
    this.setting.mapToObject(this._default, this.option);
    if (this.form) this.form.valueChanges.pipe(filter(x => _.has(x, this.option.key))).subscribe(x => {
      this.value = x[this.option.key];
    })
  }

}
