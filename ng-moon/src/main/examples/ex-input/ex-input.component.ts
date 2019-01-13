import { Component, OnInit, ViewEncapsulation } from '@angular/core';

/**
 * 输入框
 * 
 * @export
 * @class ExInputComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'ex-input',
  templateUrl: './ex-input.component.html',
  styleUrls: ['./ex-input.component.scss'],
  encapsulation: ViewEncapsulation.None  
})
export class ExInputComponent implements OnInit {

  value: any;

  search: any;

  constructor() { }

  ngOnInit() {
  }

}
