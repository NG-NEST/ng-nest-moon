import {
  Component, OnInit, ViewEncapsulation, HostBinding, ElementRef, HostListener
} from '@angular/core';
import { ButtonOption } from './button.type';

@Component({
  selector: 'nm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  inputs: ['option'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {

  option: ButtonOption;

  @HostBinding('class.is-icon') get isIcon() {
    return typeof (this.option.icon) !== 'undefined' && typeof (this.option.label) === 'undefined';
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
