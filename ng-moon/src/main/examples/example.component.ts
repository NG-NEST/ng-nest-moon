import { Component, OnInit, ViewEncapsulation } from '@angular/core';

/**
 * 示例
 * 
 * @export
 * @class ExampleComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'nm-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExampleComponent implements OnInit {

  list = [
    { title: '输入框', page: './ex-input' },
    { title: '按钮', page: './ex-button' },
    { title: '单选', page: './ex-radio' },
    { title: '多选', page: './ex-checkbox' },
    { title: '表格', page: './ex-table' },
    { title: '弹出框', page: './ex-alert' },
    { title: '消息框', page: './ex-toast' },
    { title: '工具提示', page: './ex-tooltip' },
    { title: '下拉选择', page: './ex-select' },
    { title: '浮动菜单', page: './ex-popover' },
    { title: '模态框', page: './ex-modal' },
    { title: '查找带回', page: './ex-findback' },
    { title: '添加行', page: './ex-add-item' },
    { title: '动态表单', page: './ex-form' },
    { title: '工作流', page: './ex-input' }
  ]

  constructor() {}

  ngOnInit() {
  }
}
