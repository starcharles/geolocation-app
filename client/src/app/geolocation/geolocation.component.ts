import { Component } from '@angular/core';
import {GeolocationService} from '../service/geolocation.service'
import { Config } from '../class/config';

@Component({
  selector: '',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css'],
  providers: [GeolocationService]
})
export class GeolocationComponent {

  config: Config;

  constructor(private geolocationService: GeolocationService){

  }

  showConfig() {
    this.geolocationService.getConfig()
      .subscribe(data => {
        console.log(data);
        this.config = data
      });
  }
}
