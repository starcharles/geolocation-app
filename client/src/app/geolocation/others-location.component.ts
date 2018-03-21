import {Component, Input, OnInit} from '@angular/core';
import {GeolocationService} from "../service/geolocation.service";
import {GeoLocation} from "../models/GeoLocation";
import "rxjs/add/operator/map";
import * as gps_distance from 'gps-distance';

@Component({
  selector: 'others-location',
  templateUrl: './others-location.component.html',
  styleUrls: ['./others-location.component.css'],
  providers: [GeolocationService]
})

export class OthersLocationComponent implements OnInit {

  @Input() myPosition: GeoLocation;
  positions: GeoLocation[];
  distances = [];

  constructor(private geolocationService: GeolocationService) {
  }

  ngOnInit() {
    this.showOthersGeoLocations();
  }

  ngOnChanges(myPosition: GeoLocation) {
    // this.getDistances(myPosition);
    // console.log(myPosition);
  }

  showOthersGeoLocations() {
    this.geolocationService.getOthersGeoLocations()
      .subscribe(
        data => {
          this.positions = data;
        },
        err => {
          console.log(err);
        }
      );
  }

  getDistances(myPosition = undefined) {
    if(myPosition === undefined) return;
    var self = this;
    self.distances=[];
    this.geolocationService.getOthersGeoLocations()
      .subscribe(async data => {
        await data.forEach(elem => {
          let coords = elem.coords;
          self.distances.push({
              // "user_id": elem.user.id,
              // "user_name": elem.user.name,
              "user_id": elem.user_id,
              "distance": gps_distance(myPosition.latitude, myPosition.longitude, coords.latitude, coords.longitude)
          })
        });

      })
      // .subscribe((data: GeoLocation) => {
        // data.forEach(elem => {
        //   let coords = elem.coords;
        //   let myCoords = this.myPosition.coords;
        //   let distance = gpsdistance(myCoords.latitude, myCoords.longitude, coords.latitude, coords.longitude);
        // });
        // return {
        //   "user": data.user.name,
        //   "distance": 121212
        // }
      // });
  }
}
