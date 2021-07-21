import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ContactService }  from '../contact.service';

@Component({
  selector: 'app-react-contact',
  templateUrl: './react-contact.component.html',
  styleUrls: ['./react-contact.component.css'],
  animations: [
    trigger('contactsAnimation', [
      state('active', style({
        opacity: '1'
      })),
      transition('void => *', [
        style({transform: 'translateY(-100px)', opacity: '0'}),
        animate('1000ms ease-in-out')
      ])
    ])
  ]
})
export class ReactContactComponent implements OnInit {
  companies = ['Linkedin', 'Manny Designs', 'Apple', 'Other'];
  public contacts;

  reactForm: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.createForm();
   }

  ngOnInit() { this.getContacts();}

  getContacts() {
    this.contactService.getContacts()
    .subscribe(
      data => { this.contacts = data},
      err => console.log(err)
    )
  }

   createForm() {
     this.reactForm = this.fb.group({
        first_name: '',
        last_name: '',
        email: '',
        gender: '',
        company: '',
     })
   }


  // reactForm = new FormGroup({
  //   first_name: new FormControl(),
  //   last_name: new FormControl(),
  //   email: new FormControl(),
  //   gender: new FormControl(),
  //   company: new FormControl(),
  // })

}
