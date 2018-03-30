import {Component, Input, OnInit} from '@angular/core';
import "rxjs/add/operator/map";
import * as gps_distance from 'gps-distance';
import {GeolocationService} from "../../service/geolocation.service";
import {UserService} from "../../service/user.service";
import {GeoLocation} from "../../models/GeoLocation";
import {Distance} from "../../models/Distance";
import {distanceOptions, targetActions} from "../../settings/config";

@Component({
  selector: 'others-location',
  templateUrl: './others-location.component.html',
  styleUrls: ['./others-location.component.css'],
  providers: [GeolocationService, UserService]
})

export class OthersLocationComponent implements OnInit {

  @Input() myCoordinates;
  positions: GeoLocation[];
  distances: Distance[];
  showDistance = false;
  selectedDistance: number;
  distanceOptions = distanceOptions;
  targetActions = targetActions;

  constructor(
    private geolocationService: GeolocationService,
    private userService: UserService
             ) {}

  ngOnInit() {
    this.showOthersGeoLocations();
    // this.getDistances();
  }

  private filterUsers($event){
    // console.log('filterUsers');
    // console.log($event);
    // console.log(this.selectedDistance);
    this.distances = this.userService.filterUsersByDistance(this.distances, this.selectedDistance);
  }

  private showOthersGeoLocations(): void {
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

  // private getDistances(): void {
  //   let myCoords = this.myCoordinates;
  //   if(myCoords === undefined) return;
  //
  //   this.geolocationService.getOthersGeoLocations()
  //     .map(data => {
  //       let arr: Distance[] =[];
  //       data.forEach(elem => {
  //         let coords = elem.coords;
  //         arr.push({
  //           "user_id": elem.user_id,
  //           "distance": gps_distance(myCoords.latitude, myCoords.longitude, coords.latitude, coords.longitude)
  //         });
  //       });
  //       return arr;
  //     })
  //     .subscribe( data => {
  //       this.distances = data;
  //     })
  // }
}
