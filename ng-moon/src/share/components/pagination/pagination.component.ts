import {
  Component, OnInit} from '@angular/core';
import { PaginationOption, HandlerType } from './pagination.type';
import * as _ from 'lodash';

@Component({
  selector: 'nm-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  inputs: ['option']
})
export class PaginationComponent implements OnInit {

  option: PaginationOption;

  private _pageCount: number;

  _isFirst: boolean = false;
  _isLast: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  setPagination() {
    this._pageCount = _.ceil(this.option.count / this.option.query.size);
    this._pageCount = this._pageCount == 0 ? 1 : this._pageCount;
    this._isFirst = this.option.query.index === 1;
    this._isLast = this.option.query.index === this._pageCount;
  }

  handler(type: HandlerType) {
    if (type === 'next') this.option.query.index++;
    if (type === 'previous') this.option.query.index--;
    this.option.handler && this.option.handler.next({ handlerType: type, query: this.option.query });
  }

}
