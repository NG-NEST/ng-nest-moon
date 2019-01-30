import { Injectable } from '@angular/core';
import { SimpleReuseStrategy } from 'src/main/simple-reuse-srategy';
import { Location } from '@angular/common';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class NavService {

  clearTo: boolean = false;

  constructor(
    private router: Router,
    private location: Location
  ) {
    this.router.events.pipe(filter(x => x instanceof NavigationStart))
      .subscribe((x: NavigationStart) => {
        if (this.clearTo) {
          SimpleReuseStrategy.deleteRouteSnapshot(x.url);
          this.clearTo = false;
        }
      })
  }

  back(clearTo?: boolean) {
    this.removeThis();
    this.clearTo = clearTo;
    history.back();
  }

  removeThis() {
    let url = this.location.path();
    SimpleReuseStrategy.deleteRouteSnapshot(url);
  }
}


