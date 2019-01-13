import { Injectable } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';
import { FindbackModalOption } from './findback.type';
import { ModalService } from '../modal/modal.service';

/**
 * 
 * 
 * @export
 * @class FindbackService
 */
@Injectable()
export class FindbackService {

    constructor(
        private modalSerivce: ModalService) { }

    create(option: FindbackModalOption): OverlayRef {
        let overlay = this.modalSerivce.create(option);
        option.detach = () => overlay.detach();
        return overlay;
    }

}


