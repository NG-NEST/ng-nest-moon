import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModuleService } from './module.service';
import * as _ from 'lodash';

@Component({
  selector: 'nm-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModuleComponent implements OnInit {

  constructor(
    private moduleService: ModuleService
  ) { }

  ngOnInit() {

  }

}
