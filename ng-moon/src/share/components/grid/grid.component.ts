import {
    Component, OnInit, ViewEncapsulation
  } from '@angular/core';
  
  @Component({
    selector: 'nm-grid',
    template: '<ng-content></ng-content>',
    styleUrls: ['./grid.component.scss'],
    encapsulation: ViewEncapsulation.None
  })
  export class GridComponent implements OnInit {
  
    constructor() { }
  
    ngOnInit() {
    }
    
  }
  