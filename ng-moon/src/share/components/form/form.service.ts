import { Injectable } from '@angular/core';
import { Control, InputControl, CheckboxControl, ButtonsControl, SelectControl, FindbackControl, AddItemControl, Row, FormOption } from './form.type';
import { FormControl, FormGroup, ValidatorFn, AbstractControlOptions, Validators } from '@angular/forms';
import * as _ from 'lodash';

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

    setFormOption(param) {
        let option: FormOption = {
            title: param.name,
            controls: this.setControls(param.controls)
        }
        return option;
    }

    setControls(controls: []) {
        let defaultGroup: Row = new Row({ controls: [] })
        let group = _.groupBy(controls, (x: any) => {
            if (!x.group) x.group = defaultGroup
            return x.group.id
        })
        let result = _.map(group, (x: any[]) => {
            if (x.length > 0) {
                let groupItem = x[0].group;
                let row: Row = new Row({ title: groupItem.label, icon: groupItem.icon, controls: [] })
                for (let item of x) row.controls.push(this.setControl(item))
                return row;
            }
        })
        return result;
    }

    setControl(control) {
        let result;
        let ctrl = new Control<any>({
            value: control.value,
            key: control.code,
            label: control.name,
            col: control.col.key,
            primary: control.primary,
            disabled: control.disabled,
            readonly: control.readonly,
            required: control.required,
            hide: control.hide
        });
        switch (control.type.key) {
            case 'input':
                result = new InputControl(ctrl)
                break;
            case 'checkbox':
                result = new CheckboxControl(ctrl)
                break;
            case 'buttons':
                result = new ButtonsControl(ctrl)
                break;
            case 'select':
                result = new SelectControl(ctrl)
                break;
            case 'findback':
                result = new FindbackControl(ctrl)
                break;
            case 'add-item':
                result = new AddItemControl(ctrl)
                break;
        }
        return result
    }
}


