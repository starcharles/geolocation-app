import {Component, OnInit} from '@angular/core';
import {User} from "./models/User";
import {GeoLocation} from "./models/GeoLocation";
import {Message} from "./models/Message";
import {SharedDataService} from "./service/shared-data.service";
import {UserService} from "./service/user.service";
import {GeolocationService} from "./service/geolocation.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SharedDataService, UserService]
})

export class AppComponent implements OnInit{

  //グローバル変数
  myself: User; //現在のユーザー情報
  coordinates: Coordinates;
  positions: GeoLocation[] =[]; //　他ユーザーの位置情報
  users: User[]=[];
  messages: Message[]=[];

  constructor(
    private sharedDataService: SharedDataService,
    private userService: UserService,
    private geolocationService: GeolocationService
              ){
  }

  ngOnInit(){
    // TODO:

    // 1. ユーザー情報（位置情報、ログイン情報取得) if logged_in;
    if(this.isLoggedIn()) {
      this.showMyself();
    }

    // 2. this.sharedDataService.getData();// ユーザー位置情報等に基づきj、初期データのロードをする

    // 3. websocketの確立をする
    //他ユーザーとのwebsocket確立

  }

  private isLoggedIn(): boolean{
    return true;
  }

  private showMyself(){
    this.userService.getMyself()
      .subscribe( data => this.myself = data);
  }

  private showMyGeolocation(): void {
    this.geolocationService.getMyGeolocation()
      .subscribe( res => {
          this.coordinates = res.coords;
        },
        err => {
          console.log(err);
        }
      );
  }
}
