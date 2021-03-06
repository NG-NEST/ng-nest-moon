import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleReuseStrategy } from '../simple-reuse-srategy';

/**
 * 没有权限访问的页面
 * 
 * @export
 * @class NoAuthComponent
 */
@Component({
    selector: 'no-auth',
    template: `抱歉，您没有权限访问此页面!`,
    encapsulation: ViewEncapsulation.None
})
export class NoAuthComponent implements OnInit {
    constructor(public router: Router) {

    }

    ngOnInit() {
        // 删除当前的路由复用
        SimpleReuseStrategy.deleteRouteSnapshot(this.router.url);
    }
}
