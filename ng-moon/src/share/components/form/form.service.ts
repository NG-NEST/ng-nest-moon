import { Injectable } from '@angular/core';
import { Control } from './form.type';
import { FormControl, FormGroup } from '@angular/forms';

/**
 * 
 * 
 * @export
 * @class FormService
 */
@Injectable()
export class FormService {

    constructor() { }

    create(controls: Control<any>[]): FormGroup {
        let group: any = {};
        controls.forEach(x => {
            group[x.key] = new FormControl(x.value)
        })
        return new FormGroup(group);
    }

}


