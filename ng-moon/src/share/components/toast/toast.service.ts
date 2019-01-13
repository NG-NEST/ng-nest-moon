import { Injectable, ViewContainerRef } from '@angular/core';
import { ToastOption, TOASTOPTION } from './toast.type';
import { PortalService } from '../portal/portal.service';
import { ToastComponent } from './toast.component';
import { PortalOption } from '../portal/portal.type';
import { OverlayRef } from '@angular/cdk/overlay';

/**
 * 
 * 
 * @export
 * @class ToastService
 */
@Injectable()
export class ToastService {

    constructor(
        private portalSerivce: PortalService) { }

    create(option: ToastOption | string): OverlayRef {
        if (typeof (option) === "string") {
            option = { message: option };
        }
        let portalOption: PortalOption = {
            width: 300,
            height: 50,
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop',
            injector: this.portalSerivce.createInjector(option, TOASTOPTION)
        }
        let overlay = this.portalSerivce.create(ToastComponent, portalOption);
        overlay.backdropClick().subscribe(() => overlay.detach());
        option.detach = () => overlay.detach();
        return overlay;
    }

}


