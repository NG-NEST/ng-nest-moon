import { Component, OnInit } from '@angular/core';
import { ModuleService } from './module.service';
import * as _ from 'lodash';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastService } from 'src/share/components/toast/toast.service';

@Component({
  selector: 'nm-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {

  result = {
    list: [],
    query: {}
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private moduleService: ModuleService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.getData().subscribe(x => {
      Object.assign(this.result, x)
    });
  }

  getData(): Observable<any> {
    return Observable.create(x => {
      this.moduleService.findAll(this.result.query).subscribe(y => {
        x.next(y);
      })
    })
  }

  action(type: string, data?, event?: Event) {
    switch (type) {
      case 'info':
        this.router.navigate(['./info', data.id], { relativeTo: this.activatedRoute });
        break;
      case 'add':
        this.router.navigate(['./add'], { relativeTo: this.activatedRoute });
        break;
      case 'remove':
        event.stopPropagation();
        this.moduleService.remove(data.id).subscribe(x => {
          _.remove(this.result.list, x => x.id === data.id);
          this.toastService.create('删除成功');
        })
        break;
    }
  }

}
