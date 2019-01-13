import { Injectable, ViewContainerRef } from '@angular/core';
import { ModalOption, MODALOPTION } from './modal.type';
import { PortalService } from '../portal/portal.service';
import { ModalComponent } from './modal.component';
import { PortalOption } from '../portal/portal.type';
import { OverlayRef } from '@angular/cdk/overlay';

/**
 * 
 * 
 * @export
 * @class ModalService
 */
@Injectable()
export class ModalService {

    constructor(
        private portalSerivce: PortalService) { }

    create(option: ModalOption): OverlayRef {
        let portalOption: PortalOption = {
            panelClass: option.panelClass,
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop',
            injector: this.portalSerivce.createInjector(option, MODALOPTION)
        }
        Object.assign(portalOption, option);
        let overlay = this.portalSerivce.create(ModalComponent, portalOption);
        overlay.backdropClick().subscribe(() => overlay.detach());
        option.detach = () => overlay.detach();
        return overlay;
    }

}


