import {
  Component, OnInit, HostBinding, forwardRef, ViewEncapsulation
} from '@angular/core';
import { InputOption } from './input.type';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormGroup } from '@angular/forms';
import { noop } from 'rxjs';
import { SettingService } from 'src/services/setting.service';
import { filter, distinctUntilKeyChanged, map } from 'rxjs/operators';
import * as _ from 'lodash';
import { FormOption } from '../form/form.type';

@Component({
  selector: 'nm-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  inputs: ['option', 'form', 'formOption'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true,
  }],
  encapsulation: ViewEncapsulation.None
})
export class InputComponent implements OnInit, ControlValueAccessor {

  option: InputOption;

  formOption: FormOption;

  form: FormGroup

  private _default: InputOption = {
    layout: 'vertical',
    label: '',
    required: false,
    placeholder: '',
    type: 'text',
    iconLayout: 'icon-right'
  }

  private _value: any;
  private onChangeFn: (_: any) => void = noop;
  private onTouchedFn: () => void = noop;

  get value(): any {
    return this._value;
  };

  set value(val: any) {
    if (val !== this._value) {
      this._value = val;
      if (this.form) this.setting.setFormValue(this.form, this.option.key, val);
      this.onChangeFn(val);
    }
  }

  writeValue(val: any): void {
    if (val !== this._value) {
      if (this.form) this.setting.setFormValue(this.form, this.option.key, val);
      this._value = val;
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.onChangeFn = fn;
  }

  @HostBinding("class.horizontal") get layout() {
    return this.option.layout === 'horizontal';
  }

  @HostBinding("class.icon") get icon() {
    return this.option.icon;
  }

  @HostBinding("class.icon-left") get iconLayout() {
    return this.option.iconLayout === 'icon-left';
  }

  constructor(private setting: SettingService) { }

  ngOnInit() {
    this.setting.mapToObject(this._default, this.option);
    if (this.form) this.form.valueChanges.pipe(distinctUntilKeyChanged(this.option.key), map(x => x[this.option.key])).subscribe(x => {
      this.value = x;
    })
  }

}
