import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GeoLocation } from '../models/GeoLocation';

@Injectable()
export class GeolocationService {
  constructor(private http: HttpClient) {
  }

  // configUrl = "assets/config.json";
  positionsUrl = "/api/positions";

  // getConfig(){
  //   return this.http.get<Config>(this.configUrl);
  // }
  //
  // getConfigResponse(): Observable<HttpResponse<Config>> {
  //   return this.http.get<Config>(this.configUrl, { observe: 'response' });
  // }

  getOthersGeoLocations(): Observable<GeoLocation[]>{
    return this.http.get<GeoLocation[]>(this.positionsUrl);
  }

  getGeolocation(): Observable<any>{
    return new Observable((observer => {
        navigator.geolocation.getCurrentPosition(
            position => {
              console.log(position);
              observer.next(position);
            },
            err => observer.next(err)
            ,{
          timeout: 10 * 1000
        });
    }))
  }
}
