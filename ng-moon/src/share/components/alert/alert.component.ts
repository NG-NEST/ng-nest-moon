import {
  Component, OnInit, Inject, ViewEncapsulation
} from '@angular/core';
import { AlertOption, ALERTOPTION } from './alert.type';

@Component({
  selector: 'nm-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AlertComponent implements OnInit {

  constructor(@Inject(ALERTOPTION) public option: AlertOption) {

  }

  ngOnInit() {

  }

  cancel() {
    this.option.detach();
  }

  sure() {
    this.option.sure && this.option.sure.subscribe(x => {
      x && this.option.detach();
    });
  }
}
