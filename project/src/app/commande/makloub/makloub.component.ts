import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Commandeservice } from 'src/app/apis/commande.service';
import { GetlisteService } from 'src/app/apis/getliste.service';
export class makloub {
  type:any
  harrisa:any
  
  
  pizzawalamak:any='makloub'
}
@Component({
  selector: 'app-makloub',
  templateUrl: './makloub.component.html',
  styleUrls: ['./makloub.component.scss']
})
export class MakloubComponent implements OnInit {
  @Output() popup2= new EventEmitter<any>();
  @Output() sendcommand=new EventEmitter<any>();
commande={type:String,ingred:[],harrisa:String,pizzawalamak:String}
command: makloub =new makloub()
makloubs=[]
ingred=[]
  constructor(private liste:GetlisteService,private cmd:Commandeservice) { }
  closepopup(){
    this.popup2.emit(false)
  }
  ngOnInit(): void {
  this.command.harrisa=2
    this.cmd.getallmakloub().subscribe((data:any)=>{
      this.makloubs=data.Makloub
      console.log(this.makloubs);
      
    })
    this.cmd.getallingred().subscribe((data:any)=>{
this.ingred=data.Ingred
console.log(this.ingred)
    })
  }
ajouter(){
  console.log(this.command)
  // this.sendcommand.emit(this.commande)
this.command.pizzawalamak='makloub'
this.commande.pizzawalamak=this.command.pizzawalamak
this.commande.harrisa=this.command.harrisa
  this.commande.ingred=this.ingred
  this.commande.type=this.command.type
  this.liste.add(this.command)
}

}
