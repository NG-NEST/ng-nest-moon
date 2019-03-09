import {
  Component, OnInit, Inject
} from '@angular/core';
import { TOOLTIPPORTALOPTION, TooltipPortalOption } from './tooltip.type';

@Component({
  selector: 'nm-tooltip-portal',
  templateUrl: './tooltip-portal.component.html',
  styleUrls: ['./tooltip-portal.component.scss']
})
export class TooltipPortalComponent implements OnInit {

  constructor(@Inject(TOOLTIPPORTALOPTION) public option: TooltipPortalOption) { }

  ngOnInit() {
    
  }

}
