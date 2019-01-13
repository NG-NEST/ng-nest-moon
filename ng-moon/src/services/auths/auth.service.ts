import { Injectable } from '@angular/core';

import { Observable, of, forkJoin } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpService } from '../http.service';
import { SettingService } from '../setting.service';

@Injectable()
export class AuthService {

    // 存储的KEY
    key = 'Auth';

    // 是否登录
    isLoggedIn = false;

    // 重定向的页面
    redirectUrl: string;

    // 控制器的名称
    controllerName = 'auth';

    private _user = null;

    get user(): User {
        if (!this._user) {
            let session = this.settingService.getSession(this.key);
            let local = this.settingService.getLocal(this.key)
            this._user = Object.assign(new User(), session ? session : local);
            this.settingService.setSession(this.key, this._user);
        }
        return this._user;
    }

    set user(value: User) {
        this._user = Object.assign(this._user ? this._user : new User(), value);
        this.settingService.setSession(this.key, this._user);
        if (this._user.rememberClient) this.settingService.setLocal(this.key, this._user);
    }

    /**
     * 移除KEY
     * 
     * @memberof AuthService
     */
    removeLocal() {
        this.settingService.removeLocal(this.key);
    }

    /**
     * 移除KEY
     * 
     * @memberof AuthService
     */
    removeSession() {
        this.settingService.removeSession(this.key);
    }

    constructor(
        public httpService: HttpService,
        public settingService: SettingService
    ) {
        if (this.user.account && this.user.token) {
            this.isLoggedIn = true;
        }
    }

    /**
     * 登录
     * 
     * @param {User} user 
     * @returns {Observable<result<string>>} 
     * @memberof AuthService
     */
    login(user: User): Observable<any> {
        return Observable.create((x) => {
            this.httpService
                .post(`${this.controllerName}/login`, Object.assign(new User(), user))
                .subscribe((z) => {
                    user.token = z.token;
                    this.user = user;
                    this.isLoggedIn = true;
                    forkJoin([this.getMenus()]).subscribe(y => {
                        this.user = { menus: y[0] }
                        x.next(z)
                        x.complete();
                    }, y => x.error(y))
                }, k => {
                    x.error(k)
                })
        })

    }

    /**
     * 登出
     * 
     * @returns {Observable<boolean>} 
     * @memberof AuthService
     */
    logout(): Observable<boolean> {
        return of(true).pipe(
            tap(() => {
                this.removeLocal();
                this.removeSession();
                this.isLoggedIn = false;
            })
        )
    }

    /**
     * 获取用户菜单信息
     * 
     * @memberof AuthService
     */
    getMenus(): Observable<any> {
        return Observable.create((x) => {
            this.httpService
                .get(`${this.controllerName}/menus`)
                .subscribe((z) => {
                    x.next(z);
                }, k => {
                    x.error(k);
                }, () => x.complete())
        })
    }

    /**
     * 获取用户功能权限信息
     * 
     * @memberof AuthService
     */
    getPermissions(): Observable<any> {
        return Observable.create((x) => {
            this.httpService
                .get(`${this.controllerName}/menus`)
                .subscribe((z) => {
                    x.next(z);
                }, k => {
                    x.error(k);
                }, () => x.complete())
        })
    }

}

/**
 * 用户对象
 * 
 * @export
 * @class User
 */
export class User {
    // 用户名
    account?: string;
    // 密码
    password?: string;
    // token
    token?: string;
    // 菜单
    menus?: [];
}



