import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{BrowserAnimationsModule}from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { NavbarComponent } from './acceuil/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './acceuil/register/register.component';
import { CommonModule } from '@angular/common';
import {FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './acceuil/login/login.component';
import { CommandeComponent } from './commande/commande.component';
import { PizzaComponent } from './commande/pizza/pizza.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    CommandeComponent,
    PizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }