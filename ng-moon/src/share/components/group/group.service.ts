import { Injectable } from '@angular/core';
import { PortalService } from '../portal/portal.service';
import { GroupOption, GROUPOPTION } from './group.type';
import { OverlayRef } from '@angular/cdk/overlay';
import { PortalOption } from '../portal/portal.type';
import { GroupComponent } from './group.component';

/**
 * 
 * 
 * @export
 * @class GroupService
 */
@Injectable()
export class GroupService {
    
    constructor(
        private portalSerivce: PortalService) { }

    create(option: GroupOption): OverlayRef {
        let portalOption: PortalOption = {
            panelClass: option.panelClass,
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-dark-backdrop',
            injector: this.portalSerivce.createInjector(option, GROUPOPTION)
        }
        Object.assign(portalOption, option);
        let overlay = this.portalSerivce.create(GroupComponent, portalOption);
        overlay.backdropClick().subscribe(() => overlay.detach());
        option.detach = () => overlay.detach();
        return overlay;
    }
}


