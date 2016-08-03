import {Component} from '@angular/core';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'Header',
  template: require('./header.html'), 
  providers:[AuthService]
})
export class Header {
  constructor(public auth: AuthService) {}
  // login() {
  //   this.auth.login();
  // }
  // logout() {
  //   this.auth.logout();
  // }
}
