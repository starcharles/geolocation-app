import {Component, OnInit} from '@angular/core';
import {User} from "./models/User";
import {GeoLocation} from "./models/GeoLocation";
import {ChatMessage} from "./models/ChatMessage";
import {SharedDataService} from "./service/shared-data.service";
import {UserService} from "./service/user.service";
import {GeolocationService} from "./service/geolocation.service";
import {MySelf} from "./models/MySelf";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SharedDataService, UserService]
})

export class AppComponent implements OnInit{

  //グローバル変数
  myself: MySelf; //現在のユーザー情報
  positions: GeoLocation[] =[]; //　他ユーザーの位置情報
  users: User[]=[];
  chatMessages: ChatMessage[]=[];

  constructor(
    private sharedDataService: SharedDataService,
    private userService: UserService,
    private geolocationService: GeolocationService
              ){
  }

  ngOnInit(){
    // TODO:

    // 以下逐次処理か？

    // 1. ユーザー情報（位置情報、ログイン情報取得) if logged_in;
    if(this.isLoggedIn()) {
      this.showMyself();
      this.showMyGeolocation();
    }

    // 2. this.sharedDataService.getData();// ユーザー位置情報等に基づきj、初期データのロードをする
    if(this.myself.coordinates){
      this.sharedDataService.getAllData(this.myself);
    }

    // 3. websocketの確立をする
    //他ユーザーとのwebsocket確立

  }

  private isLoggedIn(): boolean{
    return true;
  }

  private showMyself(){
    this.userService.getMyself()
      .subscribe( data => this.myself.user = data);
  }

  private showMyGeolocation(): void {
    this.geolocationService.getMyGeolocation()
      .subscribe( res => {
          this.myself.coordinates = res.coords;
        },
        err => {
          console.log(err);
        }
      );
  }
}
