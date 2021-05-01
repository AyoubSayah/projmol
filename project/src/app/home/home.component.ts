import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import * as truf from '@turf/turf';
import { HttpClient } from '@angular/common/http';
import { Commande } from '../commande';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  register = false;
  login = false;
  achat;
  commande1: Commande = new Commande();
  commande = false;
  command: Commande[] = [];
  shopping = [];
  constructor() {}

  ngOnInit(): void {}
}
