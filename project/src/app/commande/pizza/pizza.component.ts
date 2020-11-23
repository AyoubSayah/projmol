import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
details=false
  constructor() { }
  @Output() popup= new EventEmitter<any>();


  ngOnInit(): void {
  }
closepopup(){
  this.popup.emit(false)
}
}
