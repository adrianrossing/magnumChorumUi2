import {Component} from '@angular/core';
import { Auth } from './auth.service';

@Component({
  selector: 'Header',
  template: require('./header.html')
})
export class Header {
  constructor(private auth: Auth) {}
  login() {
    this.auth.login();
  }
  logout() {
    this.auth.logout();
  }
}
