import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-react-contact',
  templateUrl: './react-contact.component.html',
  styleUrls: ['./react-contact.component.css']
})
export class ReactContactComponent {
  companies = ['Linkedin', 'Manny Designs', 'Apple', 'Other'];

  constructor() { }

  reactForm = new FormGroup({
    first_name: new FormControl(),
    last_name: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    company: new FormControl(),
  })

}
