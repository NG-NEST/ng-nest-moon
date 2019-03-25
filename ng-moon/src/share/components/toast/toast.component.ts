import {
  Component, OnInit, Inject, ViewEncapsulation
} from '@angular/core';
import { ToastOption, TOASTOPTION } from './toast.type';

@Component({
  selector: 'nm-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToastComponent implements OnInit {

  constructor(@Inject(TOASTOPTION) public option: ToastOption) { }

  ngOnInit() {
    setTimeout(() => {
      this.option.detach();
    }, this.option.delay ? this.option.delay : 1000);
  }

}
