import {
  Component, OnInit, ViewEncapsulation, Inject
} from '@angular/core';
import { PopoverOption, POPOVEROPTION, PopoverMenu } from './popover.type';

@Component({
  selector: 'nm-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopoverComponent implements OnInit {

  constructor(@Inject(POPOVEROPTION) private option: PopoverOption) { }

  ngOnInit() {

  }

  handler(menu: PopoverMenu) {
    menu.handler && menu.handler.subscribe(x => {
      console.log(x);
      this.option.detach();
    })
  }

}
