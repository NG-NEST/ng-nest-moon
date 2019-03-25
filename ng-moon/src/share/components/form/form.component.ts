import {
    Component, OnInit, OnChanges, ChangeDetectorRef, ViewEncapsulation,
} from '@angular/core';
import { FormOption, Control, Row, ControlsType } from './form.type';
import * as _ from 'lodash';
import { FormGroup } from '@angular/forms';
import { FormService } from './form.service';
import { NavService } from 'src/services/nav.service';
import { SettingService } from 'src/services/setting.service';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
    selector: 'nm-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    inputs: ['option'],
    encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit, OnChanges {

    option: FormOption;

    form: FormGroup;

    controls: Control<any>[] = [];

    controlsType: ControlsType = 'controls';

    private _initValue;

    private _isInfoToUpdate = false;

    private _default: FormOption = {
        col: 12,
        titleLayout: 'top',
        isOnePage: false
    }

    constructor(
        private formService: FormService,
        private navService: NavService,
        private setting: SettingService
    ) { }

    ngOnInit() {
        // this.option = Object.assign(this._default, this.option);
        this.setting.mapToObject(this._default, this.option)
        this.config();
    }

    ngOnChanges() {
        // console.log(this.option);
    }

    config() {
        this.getType();
        this.getControls();
        this.form = this.formService.create(this.controls);
        this.getData();
        this.subject();
    }

    getData() {
        if (this.option.data) {
            this.option.data.subscribe(x => {
                if (typeof (this._initValue) == 'undefined' || (this._initValue && this._initValue.id)) this._initValue = x;
                this.form.patchValue(x);
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

    update() {
        this.option.type = 'update';
        this._isInfoToUpdate = true;
        if (typeof (this._initValue) == 'undefined') this._initValue = _.cloneDeep(this.form.value);
        if (this.option.buttons) {
            let update = _.find(this.option.buttons, x => x.type === 'update');
            if (update) {
                update.handler.next(this.form.value);
            }
        }
    }

    cancel() {
        if (this.option.buttons) {
            let cancel = _.find(this.option.buttons, x => x.type === 'cancel');
            if (cancel) {
                cancel.handler.next(this.form.value);
            } else {
                this.back();
            }
        } else {
            this.back();
        }
    }

    back() {
        if (this._isInfoToUpdate || this.option.isOnePage) {
            this.option.type = 'info';
            if (this._initValue) this.form.patchValue(this._initValue)
            this._isInfoToUpdate = false;
        }
        else this.navService.back();
    }

    subject() {
        if (this.form) {
            this.form.statusChanges.pipe(distinctUntilChanged()).subscribe(x => {
                // console.log(x);
            })
        }
    }
}
