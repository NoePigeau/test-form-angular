import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  public contacts;

  constructor(private contactService: ContactsService) {}

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contactService.getContacts()
    .subscribe(
      data => { this.contacts = data },
      err => console.log(err)
    )
  }
  addContact(value:any) {
    let contact = value;
    this.contactService.addContact(contact)
    .subscribe(
      data => { 
        this.getContacts();
        return true;
      },
      error => {
        console.error("Error saving contact");
        return Observable.throw(error);
      }
    )
  }
}
