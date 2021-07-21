import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-react-contact',
  templateUrl: './react-contact.component.html',
  styleUrls: ['./react-contact.component.css']
})
export class ReactContactComponent {
  companies = ['Linkedin', 'Manny Designs', 'Apple', 'Other'];

  reactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
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
