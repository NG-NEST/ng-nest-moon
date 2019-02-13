import {
    Component, OnInit, ViewEncapsulation, ElementRef, forwardRef, ViewChild, Renderer2, TemplateRef
} from '@angular/core';
import { NG_VALUE_ACCESSOR, FormGroup, ControlValueAccessor } from '@angular/forms';
import { noop, Subject } from 'rxjs';
import { SettingService } from 'src/services/setting.service';
import { FindbackOption } from './findback.type';
import { FindbackService } from './findback.service';
import * as _ from 'lodash';
import { OverlayRef } from '@angular/cdk/overlay';
import { distinctUntilKeyChanged, map, debounceTime } from 'rxjs/operators';
import { TableComponent } from '../table/table.component';
import { TreeComponent } from '../tree/tree.component';

@Component({
    selector: 'nm-findback',
    templateUrl: './findback.component.html',
    styleUrls: ['./findback.component.scss'],
    encapsulation: ViewEncapsulation.None,
    inputs: ['option', 'form'],
    providers: [
        FindbackService,
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FindbackComponent),
            multi: true,
        }
    ]
})
export class FindbackComponent implements OnInit, ControlValueAccessor {

    option: FindbackOption;

    form: FormGroup;

    selected: any;

    modal: OverlayRef;

    @ViewChild("template") templateRef: TemplateRef<any>;

    @ViewChild("treeCom")
    private _treeCom: TreeComponent;
    public get treeCom(): TreeComponent {
        return this._treeCom;
    }
    public set treeCom(value: TreeComponent) {
        this._treeCom = value;
    }

    @ViewChild("tableCom")
    private _tableCom: TableComponent;
    public get tableCom(): TableComponent {
        return this._tableCom;
    }
    public set tableCom(value: TableComponent) {
        this._tableCom = value;
    }

    private _default: FindbackOption = {
        panelClass: 'findback'
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
        private elementRef: ElementRef,
        private findbackService: FindbackService,
        private renderer: Renderer2,
        private setting: SettingService
    ) { }

    ngOnInit() {
        this.setting.mapToObject(this._default, this.option);
        this.option.templateRef = this.templateRef;
        if (this.option.table.selectSub == null) {
            this.option.table.selectSub = new Subject<any>();
        }
        if (this.option.table.selectedSub == null) {
            this.option.table.selectedSub = new Subject<any>();
        }
        if (this.option.tree && this.option.tree.data) {
            this.option.tree.data = this.option.tree.data.pipe(map(x => _.map(x, y => {
                this.action('changeAssist', y);
                return y
            })))
        }
        this.subject();
    }

    action(type, item?) {
        switch (type) {
            case 'openModal':
                this.selected = this.value ? _.cloneDeep(this.value) : [];
                this.modal = this.findbackService.create(this.option);
                setTimeout(() => this.option.table.selectedSub.next(this.selected))
                break;
            case 'remove':
                _.remove(this.selected, (x: any) => x.id == item.id);
                this.option.table.selectedSub.next(this.selected);
                break;
            case 'removeValue':
                _.remove(this.value, (x: any) => x.id == item.id);
                break;
            case 'cancel':
                this.modal.detach();
                break;
            case 'sure':
                this.value = _.cloneDeep(this.selected);
                this.modal.detach();
                break;
            case 'changeAssist':
                if (this.selected
                    && this.selected.length > 0
                    && this.selected[0].hasOwnProperty(this.option.tableRelation)) {
                    let len = _.filter(this.selected, z => z[this.option.tableRelation] == item.id).length;
                    item.assist = len ? `${len}` : null;
                }
                break;
        }
    }

    subject() {
        this.option.table.selectSub.subscribe((x: any) => {
            if (this.option.table.selectType == 'single') {
                this.selected = x;
            } else {
                if (x.$selected == true) {
                    this.selected = _.unionBy(this.selected, [x], 'id');
                } else {
                    _.remove(this.selected, (y: any) => y.id == x.id);
                }
            }
            this.option.table.selectedSub.next(this.selected);
            if (this.option.tree && this.option.tree.data) {
                this.action('changeAssist', _.find(this.treeCom.treeService.nodes, y => y.id == this.treeCom.treeService.selected.id));
            }
        })
        if (this.form) this.form.valueChanges
            .pipe(
                distinctUntilKeyChanged(this.option.key),
                map(x => x[this.option.key]),
                debounceTime(0)
            ).subscribe(x => {
                this.value = x;
            })
        if (this.option.tree && this.option.tree.nodeClick) {
            if (this.option.tableRelation) {
                this.option.table.initRequestData = false;
                this.option.tree.nodeClick.subscribe(x => {
                    this.option.table.query.filter[this.option.tableRelation] = x.id;
                    this.tableCom.refresh();
                })
            }
        }
        // if (this.option.tree && this.option.tree.data) {
        //     this.option.tree.data.subscribe(x => {
        //         this.treeCom.treeService.selected = _.find(x, y => y.parentId === null);
        //     })
        // }
    }

}
