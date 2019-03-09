import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/share/components/toast/toast.service';

/**
 * 消息框
 * 
 * @export
 * @class ExToastComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'ex-toast',
  templateUrl: './ex-toast.component.html',
  styleUrls: ['./ex-toast.component.scss']
})
export class ExToastComponent implements OnInit {

  constructor(
    private toastService: ToastService,
    
    ) { }

  ngOnInit() {
  }

  operation(type){
    switch(type){
      case 'toast':
        this.toastService.create('提示信息')
        break;
    }
  }

}
