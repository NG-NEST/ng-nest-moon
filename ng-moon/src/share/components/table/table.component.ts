import {
    Component, OnInit, ViewEncapsulation, ViewChild, OnDestroy
} from '@angular/core';
import { TableOption } from './table.type';
import { ResultList } from 'src/services/repository.service';
import { PaginationResult, PaginationOption } from '../pagination/pagination.type';
import { Subject, Subscription, Observable } from 'rxjs';
import { SettingService } from 'src/services/setting.service';
import { PaginationComponent } from '../pagination/pagination.component';
import * as _ from 'lodash';

@Component({
    selector: 'nm-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
    inputs: ['option'],
    encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit, OnDestroy {

    option: TableOption;

    private _default = {
        query: {
            index: 1,
            size: 10
        }
    }

    private _resultList: PaginationOption = {
        handler: new Subject<PaginationResult>()
    };

    private _selected = [];

    private _resultSub: Subscription;
    private _selectedSub: Subscription;
    private _querySub: Subscription;

    @ViewChild("pagination") pagination: PaginationComponent;

    constructor(private setting: SettingService) { }

    ngOnInit() {
        this.setting.mapToObject(this._default, this.option);
        this.refresh();
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

    setArrayData(data) {
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

    action(type, option, event?: Event) {
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
        }
    }

    ngOnDestroy() {
        if (this._resultSub) this._resultSub.unsubscribe();
        if (this._selectedSub) this._selectedSub.unsubscribe();
        if (this._querySub) this._selectedSub.unsubscribe();
    }

}
