import {
  Component, OnInit, Inject
} from '@angular/core';
import { PopoverOption, POPOVEROPTION, PopoverMenu } from './popover.type';
import { Observable, Subject } from 'rxjs';

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
    if (menu.handler) {
      if (menu.handler instanceof Subject) {
        menu.handler.next(menu);
        this.option.detach();
      } else if (menu.handler instanceof Observable) {
        menu.handler.subscribe(x => {
          this.option.detach()
        })
      } else if (menu.handler instanceof Function) {
        menu.handler(menu);
        this.option.detach();
      }
    }

  }

}
