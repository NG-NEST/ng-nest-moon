import { Component, OnInit } from '@angular/core';
import { ModuleService } from './module.service';
import * as _ from 'lodash';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'nm-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit{

  result = {
    list: [],
    query: {}
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private moduleService: ModuleService
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

  action(type) {
    switch (type) {
      case 'add':
        this.router.navigate(['./add'], { relativeTo: this.activatedRoute });
        break;
    }
  }

}
