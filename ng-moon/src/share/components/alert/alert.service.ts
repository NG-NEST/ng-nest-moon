import { Injectable } from '@angular/core';
import { AlertOption, ALERTOPTION } from './alert.type';
import { PortalService } from '../portal/portal.service';
import { AlertComponent } from './alert.component';
import { PortalOption } from '../portal/portal.type';
import { OverlayRef } from '@angular/cdk/overlay';

/**
 * 
 * 
 * @export
 * @class AlertService
 */
@Injectable()
export class AlertService {

    constructor(
        private portalSerivce: PortalService) { }

    create(option: AlertOption | string): OverlayRef {
        if (typeof (option) === "string") {
            option = { content: option };
        }
        let portalOption: PortalOption = {
            width: 300,
            height: 150,
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop',
            injector: this.portalSerivce.createInjector(option, ALERTOPTION)
        }
        let overlay = this.portalSerivce.create(AlertComponent, portalOption);
        overlay.backdropClick().subscribe(() => overlay.detach());
        option.detach = () => overlay.detach();
        return overlay;
    }

}


