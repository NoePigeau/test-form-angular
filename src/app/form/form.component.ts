import { Component, OnInit } from '@angular/core';
import { Account } from '../account';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  lastname = '';
  firstname = '';
  email = '';
  password = '';
  gend = '';
  

  gender = [ 'male' , 'female' , 'other' ];

  model = [ new Account('PIGEAU' , 'Noe' , 'bg@bg.fr' , 'test1234' , this.gender[0])];

  onSubmit( value: any){
    this.model.unshift(
      new Account(
        value.lastname,
        value.firstname,
        value.email,
        value.password,
        'male'
      )
    );
    this.lastname = '';
    this.firstname = '';
    this.email = '';
    this.password = '';
    this.gend = '';
  }

}
