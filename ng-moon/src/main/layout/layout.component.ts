import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { LayoutService } from './layout.service';

@Component({
  selector: 'nm-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {

  // 菜单展开缩起的样式绑定
  @HostBinding('class.sider-shrink') get siderShrink() { return this.layoutService.local.siderShrink; }

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
    // console.log("111")
  }

  ngAfterViewInit() {
    //console.log(this.layoutService.local);
    //this.layoutService.setLocal('collapsed', true)
  }

}
