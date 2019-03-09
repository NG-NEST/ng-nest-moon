import { Component, OnInit } from '@angular/core';
import { SelectOption } from 'src/share/components/select/select.type';

/**
 * 弹框选择组件
 * 
 * @export
 * @class ExSelectComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'ex-select',
  templateUrl: './ex-select.component.html',
  styleUrls: ['./ex-select.component.scss']
})
export class ExSelectComponent implements OnInit {

  listCategoryOption: SelectOption = {
    data: [
      {
        key: 1, label: '亚太', data: [
          { key: 1, label: '华北1（青岛）' },
          { key: 2, label: '华北2（北京）' },
          { key: 3, label: '华北3（张家口）' },
          { key: 4, label: '华北4（呼和浩特）' },
          { key: 5, label: '华东1（杭州）' }
        ]
      },
      { key: 2, label: '欧洲与美洲', data: [
        { key: 6, label: '美国西部（硅谷）' },
        { key: 7, label: '美国东部（弗吉尼亚）' },
        { key: 8, label: '欧洲中部（法兰克福）' },
        { key: 9, label: '英国（伦敦）' }
      ] },
      { key: 3, label: '中东与印度',data:[
        { key: 10, label: '中东东部（迪拜）' },
        { key: 11, label: '亚太南部（孟买）' }
      ] }
    ]
  }

  listOption: SelectOption = {
    data: [
      { key: 1, label: '华东' },
      { key: 2, label: '华南' },
      { key: 3, label: '华西' },
      { key: 4, label: '华北' }
    ]
  }

  buttonsOption: SelectOption = {
    type: 'buttons',
    data: [
      { key: 1, label: '华东' },
      { key: 2, label: '华南' },
      { key: 3, label: '华西' },
      { key: 4, label: '华北' },
      { key: 5, label: '华中' }
    ]
  }

  buttonsCategoryOption: SelectOption = {
    type: 'buttons',
    data: [
      {
        key: 1, label: '亚太', data: [
          { key: 1, label: '华北1（青岛）' },
          { key: 2, label: '华北2（北京）' },
          { key: 3, label: '华北3（张家口）' },
          { key: 4, label: '华北4（呼和浩特）' },
          { key: 5, label: '华东1（杭州）' }
        ]
      },
      { key: 2, label: '欧洲与美洲', data: [
        { key: 6, label: '美国西部（硅谷）' },
        { key: 7, label: '美国东部（弗吉尼亚）' },
        { key: 8, label: '欧洲中部（法兰克福）' },
        { key: 9, label: '英国（伦敦）' }
      ] },
      { key: 3, label: '中东与印度',data:[
        { key: 10, label: '中东东部（迪拜）' },
        { key: 11, label: '亚太南部（孟买）' }
      ] }
    ]
  }

  selected1 = {
    key: 1, label: '华东'
  }

  selected2 = {
    key: 2, label: '华北2（北京）'
  }

  selected3 = {
    key: 3, label: '华西'
  }

  selected4 = {
    key: 4, label: '华北4（呼和浩特）'
  }

  constructor() { }

  ngOnInit() {
  }

}
