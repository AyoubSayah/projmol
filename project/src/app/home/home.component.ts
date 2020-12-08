import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import* as truf  from '@turf/turf';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 37.75;
  lng = -122.41;
marker:mapboxgl.Marker
marker2:mapboxgl.Marker
from
to
distance
options
  constructor(private http :HttpClient) { }

  ngOnInit(): void {
    Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set(environment.mapbox.accessToken);
    navigator.geolocation.getCurrentPosition((position)=>{
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/outdoors-v11?optimize=true' ,
        zoom:15 ,// optimize=true
        center: [position.coords.longitude, position.coords.latitude]
    });
    this.marker = new mapboxgl.Marker()
  .setLngLat([position.coords.longitude, position.coords.latitude])
  .addTo(this.map);
this.marker2= new mapboxgl.Marker().setLngLat([10.8684288,35.6732726]).addTo(this.map)
this.from=truf.point([10.8124434,35.7732546])
this.to=truf.point([10.8684288,35.6732726])

this.distance=truf.distance(this.from,this.to);
this.http.get("https://us1.locationiq.com/v1/reverse.php?key=488a8102895b75&lat="+position.coords.latitude +"&lon=" + position.coords.longitude +"&format=json" ).subscribe((val)=>{
  console.log(val)
})


    })
  
  }

}
