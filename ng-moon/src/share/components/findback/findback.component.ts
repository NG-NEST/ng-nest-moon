import {
    Component, OnInit, ElementRef, forwardRef, ViewChild, Renderer2, TemplateRef, ViewEncapsulation
} from '@angular/core';
import { NG_VALUE_ACCESSOR, FormGroup, ControlValueAccessor } from '@angular/forms';
import { noop, Subject } from 'rxjs';
import { SettingService } from 'src/services/setting.service';
import { FindbackOption, LayoutType } from './findback.type';
import { FindbackService } from './findback.service';
import * as _ from 'lodash';
import { OverlayRef } from '@angular/cdk/overlay';
import { distinctUntilKeyChanged, map, debounceTime } from 'rxjs/operators';
import { TableComponent } from '../table/table.component';
import { TreeComponent } from '../tree/tree.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'nm-findback',
    templateUrl: './findback.component.html',
    styleUrls: ['./findback.component.scss'],
    inputs: ['option', 'form'],
    providers: [
        FindbackService,
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FindbackComponent),
            multi: true,
        }
    ],
    encapsulation: ViewEncapsulation.None
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
        panelClass: 'findback',
        layoutType: LayoutType.Table
    };

    private _value: any;
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
    }

    constructor(
        private findbackService: FindbackService,
        private setting: SettingService,
        private sanitizer: DomSanitizer
    ) { }

    ngOnInit() {
        this.setting.mapToObject(this._default, this.option);
        this.option.templateRef = this.templateRef;

        if (this.option.table) this.option.layoutType = LayoutType.Table;
        if (this.option.tree) this.option.layoutType = LayoutType.Tree;
        if (this.option.table && this.option.tree) this.option.layoutType = LayoutType.TreeAndTable;

        if (this.option.table && this.option.table.selectSub == null) {
            this.option.table.selectSub = new Subject<any>();
        }
        if (this.option.table && this.option.table.selectedSub == null) {
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
                setTimeout(() => {
                    if (this.option.table) this.option.table.selectedSub.next(this.selected)
                })
                break;
            case 'remove':
                _.remove(this.selected, (x: any) => x.id == item.id);
                if (this.option.table) this.option.table.selectedSub.next(this.selected);
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
                if (this.option.layoutType == LayoutType.TreeAndTable) {
                    if (this.selected
                        && this.selected.length > 0
                        && this.selected[0].hasOwnProperty(this.option.tableRelation)) {
                        let len = _.filter(this.selected, z => z[this.option.tableRelation] == item.id).length;
                        item.assist = len ? `${len}` : null;
                    } else {
                        item.assist = 0;
                    }
                } else if (this.option.layoutType == LayoutType.Tree) {
                    item.assist = _.find(this.selected, z => z.id == item.id) ?
                        this.sanitizer.bypassSecurityTrustHtml('<i class="icon-check"></i>')
                        : 0;
                }
                break;
            case 'selected':
                if (this.option.type == 'single') {
                    this.selected = item;
                } else {
                    let seted = _.find(this.selected, (y: any) => y.id == item.id);
                    if (seted) {
                        _.remove(this.selected, (y: any) => y.id == item.id);
                    } else {
                        this.selected = _.unionBy(this.selected, [item], 'id');
                    }
                }
                break;
        }
    }

    subject() {
        if (this.option.table) {
            this.option.table.selectSub.subscribe((x: any) => {
                this.action('selected', x);
                this.option.table.selectedSub.next(this.selected);
                if (this.option.layoutType == LayoutType.TreeAndTable) {
                    if (this.option.tree && this.option.tree.data) {
                        this.action('changeAssist', _.find(this.treeCom.treeService.nodes, y => y.id == this.treeCom.treeService.selected.id));
                    }
                }
            })
        }
        if (this.form) {
            this.form.valueChanges
                .pipe(
                    distinctUntilKeyChanged(this.option.key),
                    map(x => x[this.option.key]),
                    debounceTime(0)
                ).subscribe(x => {
                    this.value = x;
                })
        }
        if (this.option.tree && this.option.tree.nodeClick) {
            if (this.option.layoutType == LayoutType.TreeAndTable) {
                if (this.option.tableRelation) {
                    this.option.table.initRequestData = false;
                    this.option.tree.nodeClick.subscribe(x => {
                        this.option.table.query.filter[this.option.tableRelation] = x.id;
                        this.tableCom.refresh();
                    })
                }
            } else if (this.option.layoutType == LayoutType.Tree) {
                this.option.tree.nodeClick.subscribe(x => {
                    x.assist = x.assist === 0 ?
                        this.sanitizer.bypassSecurityTrustHtml('<i class="icon-check"></i>')
                        : 0;
                    this.action('selected', { id: x.id, label: x.label });
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
