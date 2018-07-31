import {Injectable} from '@angular/core';
import {User} from '../models/User';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Distance} from '../models/Distance';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  // private usersUrl = "/api/users/?id=";
  private usersUrl = '/api/users';
  private myselfUrl = '/api/myself';
  // private distances: Distance[] = [];

  public getLocalUsers(coords: Coordinates, diameter?: number): Observable<any> {
    if (diameter) {
      this.usersUrl = this.usersUrl + diameter;
    }
    return this.http.get<User[]>(this.usersUrl);
  }

  public getMyself(): Observable<User> {
    return this.http.get<User>(this.myselfUrl);
  }
}
