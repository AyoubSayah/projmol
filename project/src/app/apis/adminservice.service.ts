import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http:HttpClient,private config:ConfigService) { }
  url =this.config.hostName
  addmakloub(nom,prix,image:File){
    const data= new FormData() // nestamalaha k chtabath taswera FormData  
    data.append("nom",nom)
    data.append("prix",prix)
    data.append("image",image)
    return this.http.post(this.url+"/ajout",data) // chitzeed hajja jdeeda post
  }
  addpizza(nom,prixm,prixl,prixxl,description,image:File){
const data =new FormData()
data.append("nom",nom)
data.append("prixm",prixm)
data.append("prixl",prixl)
data.append("prixxl",prixxl)
data.append("description",description)
data.append("image",image)
return this.http.post(this.url + "/ajoutpizza",data)
  }
  addingr(nom,image:File){
    const data= new FormData()
    data.append("nom",nom)
    data.append("image",image)
    console.log("ada", image)
    return this.http.post(this.url+"/ajoutingrd",data)
  }
  addcommande(commande){
    return this.http.post(this.url+"/ajoutcommande",commande)
  }
}
