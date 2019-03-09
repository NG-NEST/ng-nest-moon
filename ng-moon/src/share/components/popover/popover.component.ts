import {
  Component, OnInit, Inject
} from '@angular/core';
import { PopoverOption, POPOVEROPTION, PopoverMenu } from './popover.type';

@Component({
  selector: 'nm-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {

  constructor(@Inject(POPOVEROPTION) public option: PopoverOption) { }

  ngOnInit() {

  }

  handler(menu: PopoverMenu) {
    menu.handler && menu.handler.subscribe(x => {
      console.log(x);
      this.option.detach();
    })
  }

}
