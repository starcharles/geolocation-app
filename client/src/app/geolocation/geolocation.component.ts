import {Component, OnInit} from '@angular/core';
import {GeolocationService} from '../service/geolocation.service'
import {SharedDataService} from '../service/shared-data.service';
// import {User} from '../models/User';

@Component({
  selector: 'geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css'],
  providers: [SharedDataService,GeolocationService]
})

export class GeolocationComponent implements OnInit{

  headers: string[];
  timestamp: number;
  coordinates: Coordinates;
  show: boolean = false;
  private sharedData: any;

  constructor(private geolocationService: GeolocationService, private sharedDataService: SharedDataService){

  }

  ngOnInit(){
    this.showMyGeolocation();
    this.sharedData = this.sharedDataService.getData();
  }

  private showMyGeolocation(): void {
    this.show = true;
    this.geolocationService.getMyGeolocation()
      .subscribe( res => {
          this.show = false;
          this.timestamp = res.timestamp;
          this.coordinates = res.coords;
        },
        err => {
          this.show = false;
          console.log(err);
        }
      );
  }
}
