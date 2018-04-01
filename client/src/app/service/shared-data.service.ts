import { Injectable } from '@angular/core';
import {User} from "../models/User";
import {GeoLocation} from "../models/GeoLocation";
import {Distance} from "../models/Distance";
import {MySelf} from "../models/MySelf";

@Injectable()
export class SharedDataService {

  constructor() { }

  private users: User[] = [];
  private positions: GeoLocation[] = [];
  private distances: Distance[] = [];

  getAllData(myself: MySelf){
    //TODO:myselfを元に周囲のユーザー情報を取得する
    
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
