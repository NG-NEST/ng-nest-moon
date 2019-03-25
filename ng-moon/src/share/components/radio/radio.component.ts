import {
  Component, OnInit, HostBinding, HostListener, ViewEncapsulation
} from '@angular/core';
import { RadioOption } from './radio.type';

@Component({
  selector: 'nm-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  inputs: ['option'],
  encapsulation: ViewEncapsulation.None
})
export class RadioComponent implements OnInit {

  option: RadioOption;

  private _default: RadioOption = {
  }

  private _checked;

  @HostListener('click', ['$event']) click(event: Event) {
    event.preventDefault();
    this._checked = !this._checked;
  }

  @HostBinding('class.checked') get checked() {
    return this._checked;
  }

  constructor() { }

  ngOnInit() {
    this.option = Object.assign(this._default, this.option);
  }

}
