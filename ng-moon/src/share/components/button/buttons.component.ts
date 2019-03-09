import {
  Component, OnInit, ElementRef, forwardRef
} from '@angular/core';
import { ButtonsOption, ButtonOption } from './button.type';
import { NG_VALUE_ACCESSOR, FormGroup } from '@angular/forms';
import { noop } from 'rxjs';
import * as _ from 'lodash';
import { SettingService } from 'src/services/setting.service';

@Component({
  selector: 'nm-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  inputs: ['option', 'form'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ButtonsComponent),
    multi: true,
  }]
})
export class ButtonsComponent implements OnInit {

  option: ButtonsOption;

  form: FormGroup

  private _default: ButtonsOption = {
    type: 'button'
  }

  private _value: any;
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
  }

  constructor(public elementRef: ElementRef, private setting: SettingService) { }

  ngOnInit() {
    this.option = Object.assign(this._default, this.option);
  }

  singleClick(param: ButtonOption) {
    this.value = param;
  }

  multipleClick(param: ButtonOption) {
    if (!this.value) this.value = [];
    let button = _.find(this.value, x => x.key === param.key)
    if (button) {
      _.remove(this.value, (x: any) => x.key === param.key);
    } else {
      this.value.push(param);
    }
  }

  setSelected(param: ButtonOption) {
    if (this.value && this.value.length > 0) {
      return _.find(this.value, x => x.key === param.key)
    }
    return false;
  }

}
