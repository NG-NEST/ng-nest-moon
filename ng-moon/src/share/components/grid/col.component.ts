import {
    Component, OnInit  } from '@angular/core';
  
  @Component({
    selector: 'nm-col',
    template: '<ng-content></ng-content>',
    styleUrls: ['./col.component.scss']
  })
  export class ColComponent implements OnInit {
  
    constructor() { }
  
    ngOnInit() {
    }
    
  }
  