/* ===== app/auth.service.ts ===== */
import { Injectable }      from '@angular/core';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt/angular2-jwt';

// avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthService {
  // configure Auth0
  lock = new Auth0Lock('vr3Dc4MexUQrJLMQOzPlL1Q9Ct0cjebf', 'adrianrossing.auth0.com', {});

  constructor() {
    // add callback for lock `authenticated` event
    this.lock.on('authenticated', (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
      // localStorage.setItem('profile', JSON.stringify(authResult.profile));
    });
  }

  public login() {
    // call the show method to display the widget.
    this.lock.show();
  };

  public authenticated() {
    // check if there's an unexpired JWT
    // this searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // remove token from localStorage
    localStorage.removeItem('profile');
    // localStorage.removeItem('id_token');
  };
}

