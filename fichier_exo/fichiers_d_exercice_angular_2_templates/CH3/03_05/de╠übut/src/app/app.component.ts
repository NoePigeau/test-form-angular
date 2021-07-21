import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styles: ['h1 { color: red;}'],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textAlign = 'center';
  background = '#f5f6fa';
  header = 'CRM';
  titre = 'Gestion des relations clients';
  
}
