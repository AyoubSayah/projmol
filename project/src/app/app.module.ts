import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { NavbarComponent } from './acceuil/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './acceuil/register/register.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './acceuil/login/login.component';
import { CommandeComponent } from './commande/commande.component';
import { PizzaComponent } from './commande/pizza/pizza.component';
import { DetailsComponent } from './commande/pizza/details/details.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MakloubComponent } from './commande/makloub/makloub.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { ShoppingComponent } from './acceuil/shopping/shopping.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { AdminComponent } from './admin/admin/admin.component';
import { MakloubadminComponent } from './admin/makloubadmin/makloubadmin.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreationpizzaComponent } from './admin/creationpizza/creationpizza.component';
import { IngredientComponent } from './admin/ingredient/ingredient.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { GetcommandeComponent } from './admin/getcommande/getcommande.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    CommandeComponent,
    PizzaComponent,
    DetailsComponent,
    MakloubComponent,
    ShoppingComponent,
    SidebarComponent,
    AdminComponent,
    MakloubadminComponent,
    CreationpizzaComponent,
    IngredientComponent,
    GetcommandeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatRadioModule,
    HttpClientModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
