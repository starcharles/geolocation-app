import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GeoLocation } from '../models/GeoLocation';
import {Distance} from "../models/Distance";
import * as gps_distance from 'gps-distance';

@Injectable()
export class GeolocationService {
  constructor(private http: HttpClient) {
  }

  private positionsUrl = "/api/positions";

  public getOthersGeoLocations(): Observable<GeoLocation[]>{
    return this.http.get<GeoLocation[]>(this.positionsUrl);
  }

  public getMyGeolocation(): Observable<any>{
    return new Observable((observer => {
        navigator.geolocation.watchPosition(
            position => observer.next(position),
            err => observer.next(err),
          {
          timeout: 10 * 1000
        });
    }))
  }
}
