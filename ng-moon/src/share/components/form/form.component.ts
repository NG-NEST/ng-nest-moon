import {
    Component, OnInit, OnChanges, ViewEncapsulation, ChangeDetectorRef, HostBinding,
} from '@angular/core';
import { FormOption, Control, Row, ControlsType } from './form.type';
import * as _ from 'lodash';
import { FormGroup } from '@angular/forms';
import { FormService } from './form.service';
import { NavService } from 'src/services/nav.service';

@Component({
    selector: 'nm-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    encapsulation: ViewEncapsulation.None,
    inputs: ['option']
})
export class FormComponent implements OnInit, OnChanges {

    option: FormOption;

    form: FormGroup;

    controls: Control<any>[] = [];

    controlsType: ControlsType = 'controls';

    private _default: FormOption = {
        col: 12,
        titleLayout: 'top'
    }

    constructor(
        private formService: FormService,
        private navService: NavService,
        private changeDetectorRef: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.option = Object.assign(this._default, this.option);
        this.config();
    }

    ngOnChanges(){
        // console.log(this.option);
    }

    config() {
        this.getType();
        this.getControls();
        this.form = this.formService.create(this.controls);
        this.getData();
    }

    getData() {
        if (this.option.data) {
            this.option.data.subscribe(x => {
                this.form.setValue(x);
                // for (let control of this._controls) {
                //     control.value = x[control.key];
                // }
                // console.log(this._controls);
            })
        }
    }

    getType() {
        if (this.option.controls && this.option.controls.length > 0) {
            if (this.option.controls[0] instanceof Control) this.controlsType = 'controls';
            if (this.option.controls[0] instanceof Row) this.controlsType = 'row';
        }
    }

    getControls() {
        if (this.controlsType === "controls") {
            this.controls = this.option.controls as Control<any>[];
        } else if (this.controlsType === "row") {
            for (let row of this.option.controls as Row[]) {
                this.controls = _.union(this.controls, row.controls)
            }
        }
    }

    submit() {
        if (this.option.buttons) {
            let submit = _.find(this.option.buttons, x => x.type === 'submit');
            if (submit) {
                submit.handler.next(this.form.value);
            }
        }
    }

    cancel() {
        this.navService.back();
    }
}
