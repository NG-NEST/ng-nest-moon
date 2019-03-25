import {
  Component, OnInit, HostBinding, ElementRef, ViewEncapsulation
} from '@angular/core';
import { ButtonOption } from './button.type';

@Component({
  selector: 'nm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  inputs: ['disabled', 'option'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {

  option: ButtonOption;

  disabled: boolean = false;

  @HostBinding('class.is-icon') get isIcon() {
    return typeof (this.option.icon) !== 'undefined' && typeof (this.option.label) === 'undefined';
  }

  @HostBinding('class.disabled') get isDisabled() {
    return this.disabled
  }

  private _default: ButtonOption = {
    type: 'button',
    title: ''
  }

  constructor(public elementRef: ElementRef) { }

  ngOnInit() {
    this.option = Object.assign(this._default, this.option);
    if (typeof (this.option.title) == 'undefined' && typeof (this.option.label) !== 'undefined') {
      this.option.title = this.option.label;
    }
  }

}
