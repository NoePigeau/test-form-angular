import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-form-react',
  templateUrl: './form-react.component.html',
  styleUrls: ['./form-react.component.css']
})
export class FormReactComponent implements OnInit {

  gender = [ 'male' , 'female' , 'other' ];

  public accounts: any;

  constructor( private fb: FormBuilder, private accountService: AccountService ) { }

  ngOnInit(){
    this.getAccount();
  }

  getAccount(){
    this.accountService.getAccount()
    .subscribe(
      data => { this.accounts = data},
      err => console.log(err)
    )
  }

  reactForm: FormGroup = this.fb.group( {
    lastname: ['',Validators.compose([Validators.required, Validators.minLength(5)] )],
        firstname: ['',Validators.compose([Validators.required, Validators.minLength(5)] )],
        email: ['',Validators.compose([Validators.required, Validators.minLength(5)] )],
        password: ['',Validators.compose([Validators.required, Validators.minLength(5)] )],
        gender: ''  })

  // reactForm = new FormGroup({
  //   lastname: new FormControl(),
  //   firstname: new FormControl(),
  //   email: new FormControl(),
  //   password: new FormControl(),
  //   gender: new FormControl()
  // });

  onSubmit() {
    let accountForm = this.reactForm.value;
    const account: Account = {
      lastName: accountForm.lastname,
      firstName: accountForm.firstname,
      email: accountForm.email,
      password: accountForm.password,
      gender: accountForm.gender

    }
    this.accountService.addAccount(account)
      .subscribe(
        data => { 
          this.getAccount();
          return true;
        },
        err => {
          console.log("error saving account");
          return Observable.throw(err);
        }
      );
      this.rebuildForm();

  }

  rebuildForm() {

    this.reactForm.reset({
        lastname: '',
        firstname:'',
        email: '',
        password:'',
        gender: ''
    });
  }


}
