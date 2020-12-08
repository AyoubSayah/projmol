import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {
pizza=false
makloub=false
commande={viande:String}
@Output() sendcommand = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  fermerpopup($event){
    this.pizza=$event
  }
  fermerpopup1($event){
    this.makloub=$event
  }
  getcommande($event){
    this.commande=$event
    this.sendcommand.emit(this.commande)
  }
  
}

