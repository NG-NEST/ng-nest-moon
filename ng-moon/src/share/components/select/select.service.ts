import { Injectable } from '@angular/core';
import { PortalService } from '../portal/portal.service';
import { PortalOption } from '../portal/portal.type';
import { OverlayRef } from '@angular/cdk/overlay';
import { SelectPortalOption, SELECTPORTALOPTION } from './select.type';
import { SelectPortalComponent } from './select-portal.component';

/**
 * 
 * 
 * @export
 * @class SelectService
 */
@Injectable()
export class SelectService {

    constructor(
        private portalSerivce: PortalService) { }

    create(option: SelectPortalOption): OverlayRef {
        let portalOption: PortalOption = {
            originPos: { originX: 'start', originY: 'bottom' },
            overlayPos: { overlayX: 'start', overlayY: 'top' },
            injector: this.portalSerivce.createInjector(option, SELECTPORTALOPTION)
        }
        let overlay = this.portalSerivce.create(SelectPortalComponent, portalOption, option.connectRef);
        option.detach = () => overlay.detach();
        return overlay;
    }

}


