import {
  Component, OnInit, ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'nm-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
}
