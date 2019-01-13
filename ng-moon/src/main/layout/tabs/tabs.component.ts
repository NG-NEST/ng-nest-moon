import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LayoutService, Menu } from '../layout.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'nm-tabs',
  templateUrl: './tabs.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements OnInit {

  constructor(
    private layoutService: LayoutService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  /**
   * tab点击事件
   * 
   * @memberof TabsComponent
   */
  tab(tab: Menu) {
    if (tab && tab.router) {
      let page = tab.router;
      let subRoot = tab.subPage;
      let param = {};
      if (subRoot) {
        if (subRoot.indexOf(';') > -1) {
          let subs = subRoot.split(';');
          subs.forEach((x, i) => {
            if (i == 0) {
              subRoot = x;
              page += `/${subRoot}`;
            }
            else {
              let vals = x.split('=');
              param[vals[0]] = vals[1];
            }
          });
        } else {
          page += `/${subRoot}`;
        }
      }
      this.router.navigate([`/${environment.layout}/${page}`, param]);
    }
  }

  /**
   * tab关闭事件
   * 
   * @memberof TabsComponent
   */
  close(tab: Menu) {
    let tabsPage = this.layoutService.session.tabsPage;
    let deleteIndex = 0;

    // 清除标签页
    _.remove(tabsPage, (x, index) => {
      if (x.router === tab.router) deleteIndex = index;
      return x.router === tab.router;
    });
    this.layoutService.session = { tabsPage: tabsPage };

    // 判断路由跳转
    if (tab.router === this.layoutService.session.activatedPage) {
      let pushIndex = null
      if (deleteIndex === 0 && tabsPage.length >= 1) {
        pushIndex = 0
      }
      if (deleteIndex > 0 && tabsPage.length > deleteIndex) {
        pushIndex = deleteIndex;
      }
      if (deleteIndex > 0 && tabsPage.length <= deleteIndex) {
        pushIndex = deleteIndex - 1;
      }
      this.tab(tabsPage[pushIndex]);
    }
  }
}
