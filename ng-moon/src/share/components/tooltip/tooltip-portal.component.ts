import {
  Component, OnInit, Inject, ViewEncapsulation
} from '@angular/core';
import { TOOLTIPPORTALOPTION, TooltipPortalOption } from './tooltip.type';

@Component({
  selector: 'nm-tooltip-portal',
  templateUrl: './tooltip-portal.component.html',
  styleUrls: ['./tooltip-portal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TooltipPortalComponent implements OnInit {

  constructor(@Inject(TOOLTIPPORTALOPTION) public option: TooltipPortalOption) { }

  ngOnInit() {
    
  }

}
