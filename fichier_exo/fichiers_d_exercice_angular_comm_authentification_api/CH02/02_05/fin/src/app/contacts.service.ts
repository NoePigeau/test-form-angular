import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactsService {
  url= 'http://localhost:3000/contact';

  constructor(private http: HttpClient) {}

  getContacts() {
    return this.http.get(this.url);
  }

  addContact(value: any) {
    let body = JSON.stringify(value);
    return this.http.post(this.url, body);
  }

}
