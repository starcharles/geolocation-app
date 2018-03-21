import {Component, OnInit} from '@angular/core';
import {GeolocationService} from '../service/geolocation.service'

@Component({
  selector: 'geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css'],
  providers: [GeolocationService]
})

export class GeolocationComponent implements OnInit{

  headers: string[];
  timestamp: number;
  position: Coordinates;
  show: boolean = false;

  constructor(private geolocationService: GeolocationService){

  }

  ngOnInit(){
    this.showGeolocation();
  }

  showGeolocation() {
    this.show = true;
    this.geolocationService.getGeolocation()
      .subscribe( res => {
          this.show = false;
          this.timestamp = res.timestamp;
          this.position = res.coords;
          // {latitude: 35.5285259, longitude: 139.71478109999998, altitude: null, accuracy: 36, altitudeAccuracy: null, …}
          console.log(this.position);
        },
        err => {
          this.show = false;
          console.log(err);
        }
      );
  }
}
