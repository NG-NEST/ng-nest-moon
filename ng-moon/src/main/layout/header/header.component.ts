import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/services/auths/auth.service';
import { LayoutService } from '../layout.service';
import { SimpleReuseStrategy } from 'src/main/simple-reuse-srategy';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'nm-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor(
    public auth: AuthService,
    public layout: LayoutService,
    public router: Router,
    public location: Location
  ) { }

  ngOnInit() {
  }

  action(type) {
    switch (type) {
      case 'logout':
        this.auth.logout().subscribe(x => {
          if (x) {
            this.layout.removeSession();
            this.layout.session = { tabsPage: [] };
            SimpleReuseStrategy.deleteRouteSnapshot();
            SimpleReuseStrategy.deleteRouteSnapshot(this.location.path());
            this.router.navigate(['/login'])
          }
        })
        break;
    }
  }

}
