import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config';

@Injectable({
  providedIn: 'root'
})
export class Commandeservice{
  constructor(private http:HttpClient,private config:ConfigService) { }
  url =this.config.hostName
getallpizza(){
 return this.http.get(this.url + "/pizza")
}
getallmakloub(){
  return this.http.get(this.url + "/makloub")
 }
 getallingred(){
  return this.http.get(this.url + "/ingredients")
 }
 ajoutcommande(commande){
   console.log("ddddddd")
   return this.http.post(this.url+ "/ajoutcommande",commande)
 }
}