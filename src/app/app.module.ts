import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OtherComponent } from './other/other.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : 'homepage' , component: HomeComponent },
  {path : 'form' , component: FormComponent },
  {path : 'other' , component: OtherComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    OtherComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot( routes ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
