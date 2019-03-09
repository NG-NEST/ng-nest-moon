import {
    Component, OnInit, Inject, ElementRef, Renderer2
} from '@angular/core';
import { GROUPOPTION, GroupOption, GroupItem } from './group.type';
import * as _ from 'lodash';

@Component({
    selector: 'nm-group',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {

    _data: GroupItem[] = [
        {
            id: '1', label: '默认', data: [
                { id: "acd028a6-15b5-376a-dd22-ea25904af3e6", label: "账号" },
                { id: "7da73d57-8776-814b-dbb4-dd96a1f00c01", label: "密码" },
                { id: "af2817b0-2f9c-4125-c79b-3495e2953df5", label: "姓名" },
                { id: "8300d947-c1df-bd06-945d-4131bcc70acf", label: "邮箱" },
                { id: "a04b47d6-2f48-915f-aa9d-89c4b71dac49", label: "手机号" }
            ]
        },
        { id: '2', label: '分组1', data: [] },
        { id: '3', label: '分组2', data: [] }
    ];

    select: GroupItem;

    group: GroupItem;

    constructor(
        @Inject(GROUPOPTION) public option: GroupOption,
        private ele: ElementRef,
        private renderer: Renderer2
    ) { }

    ngOnInit() {
        this.renderer.addClass(this.ele.nativeElement, this.option.panelClass);
        this.setData()
    }

    setData() {
        console.log(this.option.data);
        // if (this.option.data instanceof Array) {
        //     this._data = _.cloneDeep(this.option.data)
        // }
    }

    dragstart(event, group: GroupItem, item: GroupItem) {
        this.select = item;
        this.group = group;
    }

    drop(event, group: GroupItem) {
        if (group.id === this.group.id) return false;
        group.data.push(_.first(_.remove(this.group.data, x => x.id == this.select.id)));
    }

    dragover(event: Event, group) {
        event.preventDefault();
    }

    close() {
        this.option.detach();
    }

}
