import {
  Component, OnInit, forwardRef} from '@angular/core';
import { noop } from 'rxjs';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'nm-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CodeComponent),
    multi: true,
  }]
})
export class CodeComponent implements OnInit, ControlValueAccessor {

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

  constructor() { }

  ngOnInit() {
  }
  
}
