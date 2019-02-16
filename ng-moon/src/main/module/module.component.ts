import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModuleService } from './module.service';
import * as _ from 'lodash';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nm-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModuleComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private moduleService: ModuleService
  ) { }

  ngOnInit() {

  }

  action(type) {
    switch (type) {
      case 'add':
        this.router.navigate(['./info', { type: type }], { relativeTo: this.activatedRoute });
        break;
    }
  }

}
