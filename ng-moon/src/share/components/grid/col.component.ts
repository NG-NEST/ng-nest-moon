import {
    Component, OnInit, ViewEncapsulation  } from '@angular/core';
  
  @Component({
    selector: 'nm-col',
    template: '<ng-content></ng-content>',
    styleUrls: ['./col.component.scss'],
    encapsulation: ViewEncapsulation.None
  })
  export class ColComponent implements OnInit {
  
    constructor() { }
  
    ngOnInit() {
    }
    
  }
  