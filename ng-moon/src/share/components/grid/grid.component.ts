import {
    Component, OnInit  } from '@angular/core';
  
  @Component({
    selector: 'nm-grid',
    template: '<ng-content></ng-content>',
    styleUrls: ['./grid.component.scss']
  })
  export class GridComponent implements OnInit {
  
    constructor() { }
  
    ngOnInit() {
    }
    
  }
  