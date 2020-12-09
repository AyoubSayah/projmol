import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

import { Commandeservice } from 'src/app/apis/commande.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-getcommande',
  templateUrl: './getcommande.component.html',
  styleUrls: ['./getcommande.component.scss'],
})
export class GetcommandeComponent implements OnInit {
  panelOpenState = false;
  map: mapboxgl.Map;
  marker: mapboxgl.Marker;
  local = false;
  constructor(private commande: Commandeservice) {}
  commandes: [];

  ngOnInit(): void {
    Object.getOwnPropertyDescriptor(mapboxgl, 'accessToken').set(
      environment.mapbox.accessToken
    );

    this.commande.getcommande().subscribe((data: any) => {
      this.commandes = data.Commande;
      console.log(this.commandes);
    });
  }
  localisation(com) {
    this.local = true;

    console.log(com);
    console.log('a');
    setTimeout(() => {
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/outdoors-v11?optimize=true',
        zoom: 14, // optimize=true
        center: [com.long, com.latt],
      });
      this.marker = new mapboxgl.Marker()
        .setLngLat([com.long, com.latt])
        .addTo(this.map);
    },500);
  }
}
