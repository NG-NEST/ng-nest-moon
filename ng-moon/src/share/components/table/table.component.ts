import {
    Component, OnInit, ViewChild, OnDestroy, HostBinding
} from '@angular/core';
import { TableOption, TableColumn } from './table.type';
import { ResultList } from 'src/services/repository.service';
import { PaginationResult, PaginationOption } from '../pagination/pagination.type';
import { Subject, Subscription, Observable } from 'rxjs';
import { SettingService } from 'src/services/setting.service';
import { PaginationComponent } from '../pagination/pagination.component';
import * as _ from 'lodash';
import { DomSanitizer } from '@angular/platform-browser';
import { moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
    selector: 'nm-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
    inputs: ['option']
})
export class TableComponent implements OnInit, OnDestroy {

    option: TableOption;

    private _default: TableOption = {
        initRequestData: true,
        dropListDisabled: true,
        query: {
            index: 1,
            size: 10,
            filter: {}
        },
        type: 'info',
        noData: '暂无数据'
    }

    _columns: TableColumn[] = [];

    _columnLength: number = 1;

    _resultList: PaginationOption = {
        handler: new Subject<PaginationResult>(),
        list: []
    };

    private _selected = [];

    private _resultSub: Subscription;
    private _selectedSub: Subscription;
    private _querySub: Subscription;

    @ViewChild("pagination") pagination: PaginationComponent;

    @HostBinding("class.data-null") get resultList() {
        return this._resultList && this._resultList.list && this._resultList.list.length == 0
    }

    @HostBinding("class.batch") get batchType() {
        return this.option.type === 'batch';
    }

    constructor(
        private setting: SettingService,
        private domSanitizer: DomSanitizer
    ) { }

    ngOnInit() {
        this.setting.mapToObject(this._default, this.option);
        if (this.option.initRequestData) this.refresh();
        this.setTable();
        this.subject();
    }

    subject() {
        this._resultSub = this._resultList.handler.subscribe(x => {
            this.option.query = x.query
            this.refresh();
        })
        if (this.option.selectedSub) {
            this._selectedSub = this.option.selectedSub.subscribe(x => {
                this._selected = x;
                this.setSelected();
            })
        }
    }

    refresh() {
        if (this.option.data instanceof Observable) {
            this.option.data.subscribe((x: ResultList<any>) => {
                this._resultList.list = x.list;
                this._resultList.count = x.count;
                this._resultList.query = x.query;
                this.setSelected();
                this.pagination.setPagination();
            })
        } else if (this.option.data instanceof Array) {
            this.setArrayData(this.option.data);
        }
    }

    setTable() {
        this._columns = _.filter(this.option.columns, x => !x.hidden);
        this._columnLength += this._columns.length + (this.option.operations && this.option.operations.length > 0 ? 1 : 0)
            + (this.option.selectType ? 1 : 0)
    }

    setArrayData(data) {
        if (!data) {
            // this._resultList.list = [];
            return
        };
        this._resultList.list = data
        this._resultList.count = data.length;
        this._resultList.query = { index: 1, size: 0 }
    }

    handler(operation, item) {
        if (operation.handler) operation.handler(item);
    }

    setSelected() {
        if (this._resultList.list) {
            this._resultList.list.forEach(x => {
                x.$selected = _.find(this._selected, y => y.id == x.id) ? true : false;
            })
        }
    }

    action(type, option, event?: any) {
        switch (type) {
            case 'checkbox':
                if (event) event.stopPropagation();
                if (this.option.selectSub) this.option.selectSub.next(option);
                break;
            case 'trClick':
                if (this.option.selectType) {
                    option.$selected = !option.$selected;
                    this.action('checkbox', option);
                }
                break;
            case 'trDrop':
                moveItemInArray(option, event.previousIndex, event.currentIndex);
                console.log(option)
                break;
        }
    }

    setTdValue(value) {
        if (_.isString(value)) return value;
        else if (_.isBoolean(value)) {
            if (value) {
                return this.domSanitizer.bypassSecurityTrustHtml(`<i class="icon-check"></i>`)
            }
        }
    }

    ngOnDestroy() {
        if (this._resultSub) this._resultSub.unsubscribe();
        if (this._selectedSub) this._selectedSub.unsubscribe();
        if (this._querySub) this._selectedSub.unsubscribe();
    }

}
