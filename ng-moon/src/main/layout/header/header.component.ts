import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/services/auths/auth.service';

@Component({
  selector: 'nm-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
