import { Injectable } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';
import { AddItemModalOption } from './add-item.type';
import { ModalService } from '../modal/modal.service';

/**
 * 
 * 
 * @export
 * @class AddItemService
 */
@Injectable()
export class AddItemService {

    constructor(
        private modalSerivce: ModalService) { }

    create(option: AddItemModalOption): OverlayRef {
        let overlay = this.modalSerivce.create(option);
        option.detach = () => overlay.detach();
        return overlay;
    }

}


