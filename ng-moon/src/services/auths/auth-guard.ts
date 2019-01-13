import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild, CanLoad, Route } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { environment } from "../../environments/environment";
import * as _ from "lodash";
/**
 * 路由守卫
 * 
 * @export
 * @class AuthGuard
 * @implements {CanActivate}
 * @implements {CanActivateChild}
 */
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(public authService: AuthService, public router: Router) { }

    /**
     * 一级路由
     * 
     * @param {ActivatedRouteSnapshot} route 
     * @param {RouterStateSnapshot} state 
     * @returns {(boolean | Observable<boolean> | Promise<boolean>)} 
     * @memberof AuthGuard
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        let url: string = state.url;
        return this.checkLogin(url);
    }

    /**
     * 子路由
     * 
     * @param {ActivatedRouteSnapshot} childRoute 
     * @param {RouterStateSnapshot} state 
     * @returns {(boolean | Observable<boolean> | Promise<boolean>)} 
     * @memberof AuthGuard
     */
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.canActivate(childRoute, state)
    }

    /**
     * 检查用户登录
     * 
     * @param {string} url 
     * @returns 
     * @memberof AuthGuard
     */
    checkLogin(url: string) {
        if (this.authService.isLoggedIn) {
            return true;
        }
        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    }

    /**
     * 检查模块权限
     * 
     * @param {Route} route 
     * @returns 
     * @memberof AuthGuard
     */
    checkModule(route: Route) {
        if (route.path === environment.layout) { return true; };
        this.router.navigate(['index/no-auth']);
        return false;
    }

    /**
     * 检查用户登录与否
     * 
     * @param {Route} route 
     * @returns {(boolean | Observable<boolean> | Promise<boolean>)} 
     * @memberof AuthGuard
     */
    canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
        let url = `/${route.path}`;
        return this.checkLogin(url) && this.checkModule(route);
    }


}