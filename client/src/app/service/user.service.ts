import { Injectable } from '@angular/core';
import {User} from "../models/User";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {Distance} from "../models/Distance";
import {SharedDataService} from "./shared-data.service";

@Injectable()
export class UserService {

  constructor(private http: HttpClient,
              private shared: SharedDataService
              ) { }

  // private usersUrl = "/api/users/?id=";
  private usersUrl = "/api/users";
  private myselfUrl = "/api/myself";
  private distances: Distance[] =[];

  public getLocalUsers(diameter: number): Observable<User[]>{
    // return this.http.get<User[]>(this.usersUrl  + diameter);
    return this.http.get<User[]>(this.usersUrl);
  }

  public getMyself(): Observable<User>{
    return this.http.get<User>(this.myselfUrl);
  }

  public filterUsersByDistance(distances: Distance[], filterDistance: number){
    if(this.distances.length === 0) this.distances = distances;
    // console.log('filterUsers');
    // console.log($event);
    // console.log(this.selectedDistance);
    return this.distances.filter((data)=> {
      return (data.distance < filterDistance);
    });
  }
}
