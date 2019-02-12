import {
  Component, OnInit, ViewEncapsulation, Inject, HostListener, HostBinding
} from '@angular/core';
import { SELECTPORTALOPTION, SelectPortalOption, Select } from './select.type';
import * as _ from 'lodash';

@Component({
  selector: 'nm-select-portal',
  templateUrl: './select-portal.component.html',
  styleUrls: ['./select-portal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectPortalComponent implements OnInit {

  @HostListener('mouseenter', ['$event']) mouseover(event) {
    if (this.option.leaveTimeout) clearTimeout(this.option.leaveTimeout);
  }

  @HostListener('mouseleave', ['$event']) mouseout(event) {
    if (this.option.leaveTimeout) clearTimeout(this.option.leaveTimeout)
    this.option.leaveTimeout = setTimeout(() => {
      this.option.detach();
    }, 100)
  }

  @HostBinding('class.category') get category() {
    return this._category.length
  }

  @HostBinding('class.buttons') get button() {
    return this.option.type === 'buttons';
  }

  private _category: Select[] = [];

  constructor(@Inject(SELECTPORTALOPTION) public option: SelectPortalOption) { }

  ngOnInit() {
    this.setCategory();
  }

  setCategory() {
    this._category = _.filter(this.option.data, x => x.data) as Select[];
  }

  handler(select) {
    this.option.value = select;
    this.option.valueChange.next(select);
    this.option.detach();
  }

}
