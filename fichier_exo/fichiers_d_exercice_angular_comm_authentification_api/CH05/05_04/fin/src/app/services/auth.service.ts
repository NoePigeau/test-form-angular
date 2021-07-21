import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  storageKey: string = 'contacts-jwt';

  constructor() { }

  setToken(token: string) {
    localStorage.setItem(this.storageKey, token);
  }

  getToken() {
    return localStorage.getItem(this.storageKey);
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem(this.storageKey);
  }

}
