import { Component, OnInit } from '@angular/core';

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
  styleUrls: ['./ex-input.component.scss']
})
export class ExInputComponent implements OnInit {

  value: any;

  search: any;

  constructor() { }

  ngOnInit() {
  }

}
