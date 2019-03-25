import {
    Component, OnInit, Inject, ElementRef, Renderer2, ViewChild, TemplateRef, ViewEncapsulation
} from '@angular/core';
import { GROUPOPTION, GroupOption, GroupItem } from './group.type';
import * as _ from 'lodash';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormComponent } from '../form/form.component';
import { Subject } from 'rxjs';
import { ModalService } from '../modal/modal.service';
import { OverlayRef } from '@angular/cdk/overlay';
import { InputControl, Row } from '../form/form.type';
import { SettingService } from 'src/services/setting.service';

@Component({
    selector: 'nm-group',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class GroupComponent implements OnInit {

    _data: GroupItem[] = [
        // {
        //     id: '1', label: '默认', data: [
        //         { id: "acd028a6-15b5-376a-dd22-ea25904af3e6", label: "账号" },
        //         { id: "7da73d57-8776-814b-dbb4-dd96a1f00c01", label: "密码" },
        //         { id: "af2817b0-2f9c-4125-c79b-3495e2953df5", label: "姓名" },
        //         { id: "8300d947-c1df-bd06-945d-4131bcc70acf", label: "邮箱" },
        //         { id: "acd028a6-15b5-376a-dd22-ea25904af3e6", label: "账号" },
        //         { id: "7da73d57-8776-814b-dbb4-dd96a1f00c01", label: "密码" },
        //         { id: "af2817b0-2f9c-4125-c79b-3495e2953df5", label: "姓名" },
        //         { id: "a04b47d6-2f48-915f-aa9d-89c4b71dac49", label: "手机号" }
        //     ]
        // },
        // {
        //     id: '2', label: '分组1', data: [
        //         { id: "a04b47d6-2f48-915f-aa9d-89c4b712223", label: "照片" }
        //     ]
        // },
        // {
        //     id: '3', label: '分组2', data: [
        //         { id: "a04b47d6-2f48-915f-aa9d-89c4b7133c49", label: "头像" }
        //     ]
        // }
    ];

    @ViewChild("formTemp") formTemp: TemplateRef<any>;

    formCom: FormComponent;
    @ViewChild("formCom") set _formCom(val) {
        this.formCom = val;
    }

    private _default: GroupOption = {
        panelClass: 'group'
    };

    submitSubject = new Subject();

    cancelSubject = new Subject();

    modal: OverlayRef;

    select: GroupItem;

    group: GroupItem;

    liDashed: Element;

    constructor(
        @Inject(GROUPOPTION) public option: GroupOption,
        private ele: ElementRef,
        private renderer: Renderer2,
        private setting: SettingService,
        private modalService: ModalService
    ) { }

    ngOnInit() {
        this.setting.mapToObject(this._default, this.option);
        this.setData();
        this.setForm();
        this.subject();
    }

    action(type, item?) {
        switch (type) {
            case 'add':
                this.modal = this.modalService.create(this.option.addGroupOption);
                setTimeout(() => this.formCom.form.reset())
                break;
            case 'close':
                this.option.detach();
                break;
            case 'submit':
                if (this.option.submitSubject) this.option.submitSubject.next(this.dataToResult(this._data));
                this.action('close');
                break;
            case 'closeGroup':
                if (this.modal) { this.modal.detach(); }
                break;
            case 'updateGroup':
                this.modal = this.modalService.create(this.option.addGroupOption)
                setTimeout(() => {
                    this.formCom.form.reset()
                    this.formCom.form.patchValue(item)
                })
                break;
            case 'deleteGroup':
                let remove = _.first(_.remove(this._data, (x: any) => x.id === item.id));
                let first = _.first(this._data);
                first.data = _.union(first.data, remove.data)
                break;
        }
    }

    subject() {
        this.submitSubject.subscribe((x: GroupItem) => {
            if (typeof x.data === 'undefined') x.data = [];
            if (_.isEmpty(x.id)) {
                x.id = this.setting.guid();
                this._data.push(x);
            } else {
                delete x.data;
                Object.assign(_.find(this._data, y => y.id === x.id), x)
            }
            this.action('closeGroup')
        })
        this.cancelSubject.subscribe(() => {
            this.action('closeGroup')
        })
    }

    setForm() {
        if (!this.option.addGroupOption) {
            this.option.addGroupOption = {
                panelClass: 'form',
                title: '分组',
                templateRef: this.formTemp,
                width: 300,
                form: {
                    controls: [
                        new Row({
                            hide: true, controls: [
                                new InputControl({ key: "id", label: "编号" })
                            ]
                        }),
                        new Row({
                            controls: [
                                new InputControl({ key: "label", label: "名称", col: 6 }),
                                new InputControl({ key: "icon", label: "图标", col: 6 })
                            ]
                        })
                    ]
                }
            }
        }
        this.option.addGroupOption.form.buttons = [
            { type: 'submit', handler: this.submitSubject },
            { type: 'cancel', handler: this.cancelSubject }
        ];
    }

    setData() {
        if (this.option.data instanceof Array) {
            this._data = this.formatData(this.option.data);
        }
    }

    formatData(list: GroupItem[]) {
        let defaultGroup: GroupItem = { id: this.setting.guid(), label: "默认", icon: "icon-navigation-2" }
        let group = _.groupBy(list, x => {
            if (!x.group) x.group = defaultGroup
            return x.group.id
        })
        let result = _.map(group, (x, i) => {
            if (x.length > 0) {
                let groupItem = x[0].group;
                groupItem.data = x;
                return groupItem;
            }
        })
        if (result.length === 1) { result.push({ id: this.setting.guid(), label: "分组1", data: [], icon: "icon-navigation-2" }) }
        return result;
    }

    dataToResult(list: GroupItem[]) {
        let result: GroupItem[] = [];
        _.map(list, x => {
            let group = _.cloneDeep(x);
            delete group.data;
            _.map(x.data, y => {
                y.group = group
                result.push(y);
            })
        })
        return result
    }

    dropCdk(event: CdkDragDrop<GroupItem[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }

}
