import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }
commande
makloub
pizza
ingred
  ngOnInit(): void {
  }
  fermercomande($event){
    this.commande=$event
  }
  fermermakloub($event){
    this.makloub=$event
  }
  fermerpizza($event){
    this.pizza=$event
  }
fermeringred($event){
  this.ingred=$event
}

}
