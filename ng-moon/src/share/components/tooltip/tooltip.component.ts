import {
    Component, OnInit, ViewEncapsulation, HostListener, ElementRef
} from '@angular/core';
import { TooltipService } from './tooltip.service';
import { OverlayRef } from '@angular/cdk/overlay';
import { TooltipOption, TooltipPortalOption } from './tooltip.type';

@Component({
    selector: 'nm-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss'],
    encapsulation: ViewEncapsulation.None,
    inputs: ['option']
})
export class TooltipComponent implements OnInit {

    option: TooltipOption;

    private _tooltipOverlayRef: OverlayRef;

    private _portalOption: TooltipPortalOption = { connectRef: this.elementRef };

    @HostListener('mouseenter', ['$event']) mouseover(event) {
        if (!this._tooltipOverlayRef) {
            this._tooltipOverlayRef = this.tooltipService.create(this._portalOption);
        }
    }

    @HostListener('mouseleave', ['$event']) mouseout(event) {
        if (this._tooltipOverlayRef) {
            this._tooltipOverlayRef.detach();
            this._tooltipOverlayRef.dispose();
            this._tooltipOverlayRef = null;
        }
    }

    constructor(private elementRef: ElementRef, private tooltipService: TooltipService) { }

    ngOnInit() {
        Object.assign(this._portalOption, this.option);
    }

}
