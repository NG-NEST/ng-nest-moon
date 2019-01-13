import {
    Component, OnInit, ViewEncapsulation
  } from '@angular/core';
  
  @Component({
    selector: 'nm-row',
    template: '<ng-content></ng-content>',
    styleUrls: ['./row.component.scss'],
    encapsulation: ViewEncapsulation.None
  })
  export class RowComponent implements OnInit {
  
    constructor() { }
  
    ngOnInit() {
    }
    
  }
  