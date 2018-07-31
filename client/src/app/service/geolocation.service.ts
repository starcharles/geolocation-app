import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {GeoLocation} from '../models/GeoLocation';
import {Distance} from '../models/Distance';
import * as gps_distance from 'gps-distance';
import {User} from '../models/User';
import {AppState} from '../models/AppState';

@Injectable()
export class GeolocationService {
  constructor(private http: HttpClient) {
  }

  // private positionsUrl = '/api/positions';
  //
  // public getOthersGeoLocations(): Observable<GeoLocation[]> {
  //   return this.http.get<GeoLocation[]>(this.positionsUrl);
  // }

  public calcDistances(state: AppState): Promise<Distance[]> {
    return new Promise((resolve, reject) => {
      const arr: Distance[] = [];
      const myCoordinates = state.myself.coordinates;
      state.positions.forEach(elem => {
        const coords = elem.coords;
        let _name = '匿名';
        state.users.forEach(user => {
          if (user['id'] === elem.user_id) {
            _name = user['name'];
          }
        });
        arr.push({
          'user_id': elem.user_id,
          'user_name': _name,
          'distance': gps_distance(myCoordinates.latitude, myCoordinates.longitude, coords.latitude, coords.longitude)
        });
      });
      resolve(arr);
    });
  }

  public getMyGeolocation(): Observable<any> {
    return new Observable((observer => {
      navigator.geolocation.watchPosition(
        position => observer.next(position),
        err => observer.next(err),
        {
          timeout: 10 * 1000
        });
    }));
  }
}
