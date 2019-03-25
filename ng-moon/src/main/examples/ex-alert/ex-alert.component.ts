import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AlertService } from 'src/share/components/alert/alert.service';
import { Observable } from 'rxjs';

/**
 * 弹出框
 * 
 * @export
 * @class ExAlertComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'ex-alert',
  templateUrl: './ex-alert.component.html',
  styleUrls: ['./ex-alert.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExAlertComponent implements OnInit {

  constructor(
    private alertService: AlertService,

  ) { }

  ngOnInit() {
  }

  operation(type) {
    switch (type) {
      case 'alert':
        this.alertService.create({
          title: '这是一个弹出框信息',
          content: '弹出框显示详情信息',
          sure: Observable.create(x => {
            setTimeout(() => {
              console.log('延迟2s,返回确认')
              x.next(true);
              x.complete();
            }, 2000)
          })
        })
        break;
    }
  }

}
