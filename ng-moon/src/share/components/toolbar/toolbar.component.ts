import {
  Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'nm-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
}
