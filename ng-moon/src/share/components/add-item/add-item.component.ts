import {
    Component, OnInit, ViewEncapsulation, ElementRef, forwardRef, ViewChild, Renderer2, TemplateRef, HostBinding
} from '@angular/core';
import { NG_VALUE_ACCESSOR, FormGroup, ControlValueAccessor } from '@angular/forms';
import { noop, Subject } from 'rxjs';
import { SettingService } from 'src/services/setting.service';
import { AddItemOption, ActionType } from './add-item.type';
import { AddItemService } from './add-item.service';
import * as _ from 'lodash';
import { OverlayRef } from '@angular/cdk/overlay';
import { distinctUntilKeyChanged, map } from 'rxjs/operators';
import { Control, Row, ControlsType } from '../form/form.type';
import { TableOption } from '../table/table.type';
import { TableComponent } from '../table/table.component';
import { FormComponent } from '../form/form.component';

@Component({
    selector: 'nm-add-item',
    templateUrl: './add-item.component.html',
    styleUrls: ['./add-item.component.scss'],
    encapsulation: ViewEncapsulation.None,
    inputs: ['option', 'form'],
    providers: [
        AddItemService,
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AddItemComponent),
            multi: true,
        }
    ]
})
export class AddItemComponent implements OnInit, ControlValueAccessor {

    option: AddItemOption;

    form: FormGroup;

    modal: OverlayRef;

    submitSubject = new Subject();

    cancelSubject = new Subject();

    type: ActionType;

    controls: Control<any>[] = [];

    controlsType: ControlsType = 'controls';

    table: TableOption = {
        columns: [],
        data: []
    }

    relationManyOne: Control<any>;

    @ViewChild("template") templateRef: TemplateRef<any>;

    @ViewChild("tableCom") tableCom: TableComponent;

    formCom: FormComponent;
    @ViewChild("formCom") set _formCom(val) {
        this.formCom = val;
    }

    private _default: AddItemOption = {
        panelClass: 'add-item',
        buttons: []
    };

    private _value: any;
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    get value(): any {
        return this._value;
    };

    set value(val: any) {
        if (val !== this._value) {
            this._value = val;
            if (this.form) this.setting.setFormValue(this.form, this.option.key, val);
            this.onChangeCallback(val);
        }
    }

    writeValue(val: any): void {
        if (val !== this._value) {
            this._value = val;
        }
    }

    registerOnChange(fn: any): void {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouchedCallback = fn;
    }

    constructor(
        private addItemService: AddItemService,
        private setting: SettingService
    ) { }

    ngOnInit() {
        this.setting.mapToObject(this._default, this.option);
        this.getType();
        this.getControls();
        this.setTable();
        this.setRelation();
        this.option.templateRef = this.templateRef;
        this.option.form.buttons = [
            { type: 'submit', handler: this.submitSubject },
            { type: 'cancel', handler: this.cancelSubject }
        ]
        this.subject();
    }

    action(type, item?) {
        switch (type) {
            case 'add':
                this.type = 'add';
                this.modal = this.addItemService.create(this.option);
                break;
            case 'remove':
                _.remove(this.value, (x: any) => x.id == item.id);
                this.tableCom.setArrayData(this.value);
                break;
            case 'update':
                this.type = 'update';
                this.modal = this.addItemService.create(this.option);
                setTimeout(() => this.formCom.form.patchValue(item))
                break;
            case 'cancel':
                this.modal.detach();
                break;
            case 'button':
                if (item && item.defaultData) {
                    item.defaultData.forEach(x => {
                        x.id = this.setting.guid();
                        x[this.relationManyOne.key] = this.form.value.id;
                        this.value = _.union(_.cloneDeep(this.value), [x]);
                    })
                    this.tableCom.setArrayData(this.value);
                    // console.log(this.value, datas)
                    // this.value = _.union(_.cloneDeep(this.value), datas);
                    // item.defaultData = datas;
                }
                if (item.handler) item.handler.next(item);
                break;
        }
    }

    getType() {
        if (this.option.form.controls && this.option.form.controls.length > 0) {
            if (this.option.form.controls[0] instanceof Control) this.controlsType = 'controls';
            if (this.option.form.controls[0] instanceof Row) this.controlsType = 'row';
        }
    }

    getControls() {
        if (this.controlsType === "controls") {
            this.controls = this.option.form.controls as Control<any>[];
        } else if (this.controlsType === "row") {
            for (let row of this.option.form.controls as Row[]) {
                this.controls = _.union(this.controls, row.controls)
            }
        }
    }

    setTable() {
        this.table.columns = _.filter(this.controls, x => x.colHead).map((x: any) => {
            return { key: x.key, title: x.label }
        });
        this.table.operations = [
            { icon: 'icon-edit-2', handler: (x) => this.action('update', x) },
            { icon: 'icon-trash-2', handler: (x) => this.action('remove', x) }
        ]
    }

    setRelation() {
        this.relationManyOne = _.find(this.controls, x => x.relation === 'many-one');
    }

    subject() {
        this.submitSubject.subscribe((x: any) => {
            if (this.type == 'add') {
                if (_.isEmpty(x.id)) {
                    x.id = this.setting.guid();
                }
                if (this.relationManyOne && this.form) {
                    x[this.relationManyOne.key] = this.form.value.id;
                }
                this.value = _.union(this.value, [x]);
            } else if (this.type == 'update') {
                let item = _.find(this.value, y => y.id === x.id)
                Object.assign(item, x);
            }
            this.tableCom.setArrayData(this.value);
            this.formCom.form.reset();
            this.action('cancel')
        })
        this.cancelSubject.subscribe(x => {
            this.action('cancel')
        })
        if (this.form) {
            this.form.valueChanges.pipe(distinctUntilKeyChanged(this.option.key), map(x => x[this.option.key])).subscribe(x => {
                this.value = x;
                this.tableCom.setArrayData(this.value)
            })
        }
    }

}
