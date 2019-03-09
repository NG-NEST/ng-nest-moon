import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ModalService } from 'src/share/components/modal/modal.service';

/**
 * 模态框
 * 
 * @export
 * @class ExModalComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'ex-modal',
  templateUrl: './ex-modal.component.html',
  styleUrls: ['./ex-modal.component.scss']
})
export class ExModalComponent implements OnInit {

  @ViewChild("template") template: TemplateRef<any>;

  constructor(
    private modalService: ModalService,

  ) { }

  ngOnInit() {
  }

  operation(type) {
    switch (type) {
      case 'modal':
        this.modalService.create({
          title: '弹出模态框',
          templateRef: this.template,
          context: { name: 'liwenxuan' }
        })
        break;
    }
  }

}
