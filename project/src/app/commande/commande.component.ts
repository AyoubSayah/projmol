import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {
pizza=false
makloub=false
  constructor() { }

  ngOnInit(): void {
  }
  fermerpopup($event){
    this.pizza=$event
  }
  fermerpopup1($event){
    this.makloub=$event
  }
}

