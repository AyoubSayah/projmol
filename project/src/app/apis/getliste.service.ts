import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Commande } from '../commande';
export class solde {
  prix : any=0


}

@Injectable({
  providedIn: 'root'
})
export class GetlisteService {
list=[]
sold:solde=new solde()
add(commande){
  console.log(commande)
  const command : Commande= new Commande()
  
  command.type=commande.type
  command.ingred=commande.ingred
  command.harrisa=commande.harrisa
  command.pizzawalamak=commande.pizzawalamak
  this.sold.prix=this.sold.prix + commande.type.prix
this.list.push(command)

console.log(this.list);

}
get(){
  return this.list
}
getsolde(){
  return this.sold
}
delete(element){
  for (let index = 0; index < this.list.length; index++) {
    if (this.list[index]==element){
      this.sold.prix=this.sold.prix-element.type.prix
      this.list.splice(index,1)
    }
    
  }

}
deleteliste(){
  this.list.splice(0,this.list.length)
  this.sold.prix=0
}
  constructor() { }
}
