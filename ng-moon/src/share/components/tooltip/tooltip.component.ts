import {
    Component, OnInit, ElementRef, ViewEncapsulation
} from '@angular/core';
import { TooltipService } from './tooltip.service';
import { OverlayRef } from '@angular/cdk/overlay';
import { TooltipOption, TooltipPortalOption } from './tooltip.type';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { SettingService } from 'src/services/setting.service';

@Component({
    selector: 'nm-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss'],
    inputs: ['option'],
    encapsulation: ViewEncapsulation.None
})
export class TooltipComponent implements OnInit {

    option: TooltipOption;

    private _tooltipOverlayRef: OverlayRef;

    private _portalOption: TooltipPortalOption = { connectRef: this.elementRef };

    // @HostListener('mouseenter', ['$event']) mouseover(event) {

    // }

    // @HostListener('mouseleave', ['$event']) mouseout(event) {
        
    // }

    constructor(
        private elementRef: ElementRef, 
        private tooltipService: TooltipService        ) {
        
    }

    ngOnInit() {
        Object.assign(this._portalOption, this.option);
        fromEvent(this.elementRef.nativeElement, "mouseenter").pipe(debounceTime(200)).subscribe(() => {
            if (!this._tooltipOverlayRef) {
                this._tooltipOverlayRef = this.tooltipService.create(this._portalOption);
            }
        })
        fromEvent(this.elementRef.nativeElement, "mouseleave").pipe(debounceTime(200)).subscribe(() => {
            if (this._tooltipOverlayRef) {
                this._tooltipOverlayRef.detach();
                this._tooltipOverlayRef.dispose();
                this._tooltipOverlayRef = null;
            }
        })
    }

}
