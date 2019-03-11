import { Injectable } from '@angular/core';
import { Control } from './form.type';
import { FormControl, FormGroup, ValidatorFn, AbstractControlOptions, Validators } from '@angular/forms';

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
            group[x.key] = new FormControl(x.value, this.setValidator(x))
        })
        return new FormGroup(group);
    }

    setValidator(control: Control<any>): ValidatorFn | ValidatorFn[] | AbstractControlOptions {
        let validatorFn:ValidatorFn[] = [];
        if (control.required) {
            validatorFn.push(Validators.required);
        }
        return validatorFn
    }

}


