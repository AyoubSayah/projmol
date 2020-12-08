import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Commande } from '../commande';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {
register=false
login=false
achat
commande1 :Commande=new Commande()
commande=false
command:Commande[]=[]
shopping=[]
  constructor() { }

  ngOnInit(): void {
  }
  

}
