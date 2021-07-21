import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class ContactsService {
  url= 'http://localhost:3000/contact';
  registerUrl = 'http://localhost:3000/auth/login';

  constructor(private http: HttpClient, private auth: AuthService) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `JWT ${this.auth.getToken()}`
    })
  }

  getContacts() {
    return this.http.get(this.url, this.httpOptions);
  }

  addContact(value: any) {
    let body = {
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      company: value.company,
      phone: parseInt(value.phone),
    }
    return this.http.post(this.url, body, this.httpOptions);
  }

  login(payload: any) {
    debugger;
    return this.http.post(this.registerUrl, payload);
  }

}
