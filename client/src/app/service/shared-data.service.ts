import { Injectable } from '@angular/core';
import {User} from "../models/User";
import {GeoLocation} from "../models/GeoLocation";
import {Distance} from "../models/Distance";

@Injectable()
export class SharedDataService {

  constructor() { }

  private users: User[] = [];
  private positions: GeoLocation[] = [];
  private distances: Distance[] = [];

  getData(){
    return {
      "users": this.users,
      "positions": this.positions,
      "distances": this.distances
    }
  }

  updateData(type: string, newSata: any){
  }

  deleteData(){

  }
}
