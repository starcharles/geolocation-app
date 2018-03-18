import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../class/config';

@Injectable()
export class GeolocationService {

  constructor(private http: HttpClient) {
    console.log("GeolocationService");
  }

  configUrl = '../../assets/config.json';

  getConfig(){
    return this.http.get<Config>(this.configUrl);
  }

  // getGeolocation(){
  //
  // }
  //
  // showGeolocation(){
  //
  // }
}
