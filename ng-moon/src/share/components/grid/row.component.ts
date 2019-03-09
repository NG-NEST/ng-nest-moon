import {
    Component, OnInit
  } from '@angular/core';
  
  @Component({
    selector: 'nm-row',
    template: '<ng-content></ng-content>',
    styleUrls: ['./row.component.scss']
  })
  export class RowComponent implements OnInit {
  
    constructor() { }
  
    ngOnInit() {
    }
    
  }
  