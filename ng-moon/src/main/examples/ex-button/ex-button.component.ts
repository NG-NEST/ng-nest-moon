import { Component, OnInit } from '@angular/core';
import { ButtonOption } from 'src/share/components/button/button.type';

/**
 * 按钮
 * 
 * @export
 * @class ExButtonComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'ex-button',
  templateUrl: './ex-button.component.html',
  styleUrls: ['./ex-button.component.scss']
})
export class ExButtonComponent implements OnInit {

  buttons: ButtonOption[] = [
    { key: 1, label: '分享', icon: 'icon-share-2' },
    { key: 2, label: '分享', icon: 'icon-share-2' },
    { key: 3, label: '分享', icon: 'icon-share-2' }
  ]

  selected: ButtonOption = { key: 1, label: '分享', icon: 'icon-share-2' };

  selecteds: ButtonOption[] = [
    { key: 1, label: '分享', icon: 'icon-share-2' },
    { key: 2, label: '分享', icon: 'icon-share-2' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
