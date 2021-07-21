import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public token;

  constructor(private api: ContactsService, private auth: AuthService) { }

  ngOnInit() {
  }

  login(value: any) {
    debugger;
    const payload = {
      username: value.username,
      email: value.email,
      password: value.password
    };
    debugger;
    this.api.login(payload)
      .subscribe(data => {
        this.token = data['token'];
        this.auth.setToken(this.token);
      });
  }

}
