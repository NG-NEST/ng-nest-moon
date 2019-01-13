import {
  Component, OnInit, ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'nm-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
}
