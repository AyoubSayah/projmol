import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Commandeservice } from 'src/app/apis/commande.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
details=false
  constructor(private comannde:Commandeservice) { }
  @Output() popup= new EventEmitter<any>();
Data=[]
mypizza
  ngOnInit(): void {
this.comannde.getallpizza().subscribe((data:any)=>{
 this.Data=data.Pizza
})
  }
closepopup(){
  this.popup.emit(false)
}
detail(pizza){
  console.log(pizza)
  this.mypizza=pizza

  this.details=true

}
}
