import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() sendcommande = new EventEmitter<any>();
  @Output() sendpizza = new EventEmitter<any>();
  @Output() sendmakloub = new EventEmitter<any>();
  @Output() sendingr = new EventEmitter<any>();
  constructor() {}
  commandes = true;
  makloubs = false;
  pizzas = false;
  ing = false;
  ngOnInit(): void {}
  commande() {
    this.sendmakloub.emit(false);
    this.sendpizza.emit(false);
    this.sendingr.emit(false);
    this.ing = false;
    this.pizzas = false;
    this.makloubs = false;

    this.commandes = true;
    this.sendcommande.emit(this.commandes);
  }
  makloub() {
    this.sendcommande.emit(false);
    this.sendpizza.emit(false);
    this.sendingr.emit(false);
    this.commandes = false;
    this.pizzas = false;
    this.makloubs = true;
    this.ing = false;

    this.sendmakloub.emit(this.makloubs); // tabath l parent ili variable makloub tbadeel
  }
  pizza() {
    this.sendcommande.emit(false);
    this.sendmakloub.emit(false);
    this.sendingr.emit(false);
    this.commandes = false;
    this.ing = false;

    this.makloubs = false;
    this.pizzas = true;
    this.sendpizza.emit(this.pizzas);
  }
  ingred() {
    this.sendpizza.emit(false);
    this.sendcommande.emit(false);
    this.sendmakloub.emit(false);
    this.commandes = false;
    this.pizzas = false;
    this.makloubs = false;

    this.ing = true;
    this.sendingr.emit(this.ing);
  }
}
