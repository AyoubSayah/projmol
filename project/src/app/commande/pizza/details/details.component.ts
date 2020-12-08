import { Component, Input, OnInit } from '@angular/core';
import { GetlisteService } from 'src/app/apis/getliste.service';
import { Commande } from 'src/app/commande';
export class Pizza {
  nom : string
  prix:number
  taille:string
  image:string
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
@Input() pizza :any
prix='l'
commande :Commande=new Commande()
  constructor(private chariot:GetlisteService) { }

  ngOnInit(): void {
    console.log(this.pizza)
  }
ajout(){
let pizza:Pizza =new Pizza()  
pizza.nom=this.pizza.nom
pizza.image=this.pizza.image
if (this.prix=='l'){
 pizza.prix=this.pizza.prixl
 pizza.taille='l'
}
if (this.prix=='m'){
  pizza.prix=this.pizza.prixm
  pizza.taille='m'

}
if (this.prix=='xl'){
  pizza.prix=this.pizza.prixxl
  pizza.taille='xl'

}
this.commande.type=pizza
this.commande.pizzawalamak='pizza'
this.chariot.add(this.commande)
}
}
