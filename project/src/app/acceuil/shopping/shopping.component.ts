import { Component, Input, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/apis/adminservice.service';
import { GetlisteService } from 'src/app/apis/getliste.service';
import { Commande } from 'src/app/commande';

export class comm {
  list : Commande[]
  long:number
  latt:number
  total:number

}
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
  @Input() command :Commande[] =[];
  @Input() achat:[]
  list :comm =new comm()
solde
details=false
  constructor(private liste :GetlisteService,private Admin:AdminserviceService) { }
  commande1:Commande=new Commande()

  ngOnInit(): void {
    this.command=this.liste.get()
    this.solde=this.liste.getsolde()
  }
ecrire(){
  navigator.geolocation.getCurrentPosition((position)=>{
this.list.list=this.command
this.list.long=position.coords.longitude
this.list.latt=position.coords.latitude
this.list.total=this.solde.prix
this.Admin.addcommande(this.list).subscribe(()=>{
  this.liste.deleteliste()
  this.command.splice(0,this.command.length)
})

  })
}
delete(element){
  this.liste.delete(element)
}

}
