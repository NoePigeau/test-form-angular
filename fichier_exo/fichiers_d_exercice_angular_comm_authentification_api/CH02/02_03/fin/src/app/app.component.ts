import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  url= 'http://localhost:3000/contact';
  public contacts;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.url)
      .subscribe(
        data => { this.contacts = data },
        err => console.log(err)
      )
  }
}
