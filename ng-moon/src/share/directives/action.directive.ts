import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { LayoutService } from 'src/main/layout/layout.service';
import * as _ from 'lodash';
import { AuthService } from 'src/services/auths/auth.service';

@Directive({
    selector: '[action]'
})
export class ActionDirective {

    @Input()
    action: string;

    @Input()
    and: boolean;

    @Input()
    or: boolean;

    @Input()
    hidden: boolean = false;

    isGrant: boolean = false;

    constructor(
        public ele: ElementRef,
        public authService: AuthService,
        public renderer: Renderer2,
        public layout: LayoutService,
    ) { }

    ngOnInit() {
        if (!this.action) return;
        let isAuth;
        let menu = _.find(this.authService.user.permissions.menus, x => x.router == this.layout.session.activatedPage);
        if (menu) {
            isAuth = _.find(this.authService.user.permissions.actions, x => x.menuId == menu.id && x.code == this.action);
        }
        if (this.and != null) {
            this.isGrant = isAuth && this.and;
        } else if (this.or != null) {
            this.isGrant = isAuth || this.or;
        } else {
            this.isGrant = (isAuth);
        }
        if (!this.isGrant) {
            if (this.hidden) {
                this.ele.nativeElement.parentNode.removeChild(this.ele.nativeElement);
            } else {
                this.ele.nativeElement.disabled = true;
                // this.renderer.listen(this.ele.nativeElement, "click", null);
                this.renderer.addClass(this.ele.nativeElement, 'disabled');
                // Todo: 删除点击事件
                // let newEle = this.ele.nativeElement.cloneNode();
                // this.ele.nativeElement.parentNode.replaceChild(newEle, this.ele.nativeElement);
            }
        }
    }

}
