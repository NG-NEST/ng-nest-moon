import { Injectable } from '@angular/core';
import { PortalService } from '../portal/portal.service';
import { PortalOption } from '../portal/portal.type';
import { OverlayRef } from '@angular/cdk/overlay';
import { TooltipPortalOption, TOOLTIPPORTALOPTION } from './tooltip.type';
import { TooltipPortalComponent } from './tooltip-portal.component';

/**
 * 
 * 
 * @export
 * @class TooltipService
 */
@Injectable()
export class TooltipService {

    constructor(
        private portalSerivce: PortalService) { }

    create(option: TooltipPortalOption): OverlayRef {
        let portalOption: PortalOption = {
            originPos: { originX: 'center', originY: 'bottom' },
            overlayPos: { overlayX: 'center', overlayY: 'top' },
            injector: this.portalSerivce.createInjector(option, TOOLTIPPORTALOPTION)
        }
        let overlay = this.portalSerivce.create(TooltipPortalComponent, portalOption, option.connectRef);
        overlay.backdropClick().subscribe(() => overlay.detach());
        option.detach = () => overlay.detach();
        return overlay;
    }

}


