import { Injectable, ViewContainerRef } from '@angular/core';
import { PopoverOption, POPOVEROPTION } from './popover.type';
import { PortalService } from '../portal/portal.service';
import { PopoverComponent } from './popover.component';
import { PortalOption } from '../portal/portal.type';
import { OverlayRef } from '@angular/cdk/overlay';

/**
 * 
 * 
 * @export
 * @class PopoverService
 */
@Injectable()
export class PopoverService {

    constructor(
        private portalSerivce: PortalService) { }

    create(option: PopoverOption): OverlayRef {
        let portalOption: PortalOption = {
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop',
            originPos: { originX: 'start', originY: 'bottom' },
            overlayPos: { overlayX: 'start', overlayY: 'top' },
            injector: this.portalSerivce.createInjector(option, POPOVEROPTION)
        }
        Object.assign(portalOption, option);
        let overlay = this.portalSerivce.create(PopoverComponent, portalOption, option.connectRef);
        overlay.backdropClick().subscribe(() => overlay.detach());
        option.detach = () => overlay.detach();
        return overlay;
    }

}


