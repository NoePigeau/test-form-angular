import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styles: ['h1 { color: red;}'],
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('headerAnimation', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active', style({
        transform: 'scale(1.5)'
      }))
    ])
    
  ]
})
export class AppComponent {
  headerState = 'inactive';

  animateHeader() {
    this.headerState = (this.headerState === 'inactive' ? 'active' : 'inactive'); 
  }

  textAlign = 'center';
  background = '#f5f6fa';
  header = 'CRM';
  titre = 'Gestion des relations clients';
  
}
