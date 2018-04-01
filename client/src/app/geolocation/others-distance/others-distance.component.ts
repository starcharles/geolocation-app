import { Component, OnInit, Input } from '@angular/core';
import {User} from "../../models/User";
import {Distance} from "../../models/Distance";
import * as gps_distance from 'gps-distance';
import {distanceOptions} from "../../settings/config"
import {GeolocationService} from "../../service/geolocation.service"
import {GeoLocation} from "../../models/GeoLocation";
import {ChatMessage} from "../../models/ChatMessage";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'others-distance',
  templateUrl: './others-distance.component.html',
  styleUrls: ['./others-distance.component.css'],
  providers: [UserService,GeolocationService]
})
export class OthersDistanceComponent implements OnInit {

  constructor(
    private userService:UserService,
    private geolocationService:GeolocationService,
  ) { }

  @Input() myCoordinates;
  positions: GeoLocation[];
  users: User[];
  distances: Distance[];
  selectedDistance: number;
  showDistance = true;
  distanceOptions = distanceOptions;

  ngOnInit() {
    this.getUsers();
    this.getDistances();
  }

  private getUsers(diameter: number = 0): void{
    this.userService.getLocalUsers(diameter)
      .subscribe(data => this.users = data);
  }

  private filterUsers($event){
    this.distances = this.userService.filterUsersByDistance(this.distances, this.selectedDistance);
  }

  private getDistances(): void {
    let myCoords = this.myCoordinates;
    if(myCoords === undefined) return;

    this.geolocationService.getOthersGeoLocations()
      .map(data => {
        this.positions = data;
        let arr: Distance[] =[];
        data.forEach(elem => {
          let coords = elem.coords;
          let _name ='匿名';
          this.users.forEach(user => {
            if(user['id'] === elem.user_id){
              _name = user['name'];
            }
          });
          arr.push({
            "user_id": elem.user_id,
            "user_name": _name,
            "distance": gps_distance(myCoords.latitude, myCoords.longitude, coords.latitude, coords.longitude)
          });
        });
        return arr;
      })
      .subscribe( data => {
        this.distances = data;
      })
  }
}
