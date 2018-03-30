import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {MessageService} from '../../service/message.service';
import {User} from "../../models/User";
import {Distance} from "../../models/Distance";
import * as gps_distance from 'gps-distance';
import {distanceOptions} from "../../settings/config"
import {GeolocationService} from "../../service/geolocation.service"
import {GeoLocation} from "../../models/GeoLocation";
import {Message} from "../../models/Message";

@Component({
  selector: 'chat-panel',
  templateUrl: './chat-panel.component.html',
  styleUrls: ['./chat-panel.component.css'],
  providers: [UserService,MessageService]
})

export class ChatPanelComponent implements OnInit {
  constructor(
    private userService:UserService,
    private geolocationService:GeolocationService,
    private messageService: MessageService,
              ) { }

  @Input() myCoordinates;
  positions: GeoLocation[];
  users: User[];
  distances: Distance[];
  messages: Message[] =[];
  selectedDistance: number;
  showDistance = false;
  distanceOptions = distanceOptions;

  // TODO:ログイン、ユーザー情報保持
  //ログイン中ユーザー情報（本当はアプリ内のグローバル変数
  myself = <User>{
    "id":10,
    "name": "taro"
  };

  ngOnInit() {
    this.getUsers();
    this.showMessages();
  }

  addChatMessage(event){
    if(!event.message) return;

    let newMsg: Message = <Message> {
      "id": this.messages.length === 0 ? 1 :this.messages[this.messages.length-1].id,
      "user_id": this.myself.id,
      "message": event.message
    };
    this.messages.push(newMsg);
    console.log(this.messages);
  }

  private showMessages(): void{
    this.messageService.getMessages()
      .subscribe( data => {
        this.messages = data;
      });
  }
  private getUsers(diameter: number = 0): void{
  // private getUsers(): void{
    this.userService.getLocalUsers(0)
      .subscribe(data => this.users = data);
  }

  private filterUsers($event){
    this.distances = this.userService.filterUsersByDistance(this.distances, this.selectedDistance);
  }

  private getDistances(): void {
    let myCoords = this.myCoordinates;
    if(myCoords === undefined) return;

    this.geolocationService.getOthersGeoLocations()
      .map(data => {
        this.positions = data;
        let arr: Distance[] =[];
        data.forEach(elem => {
          let coords = elem.coords;
          let _name ='匿名';
          this.users.forEach(user => {
            if(user['id'] === elem.user_id){
              _name = user['name'];
            }
          });
          // for(let user in this.users){
          //   if(user['id'] === elem.user_id){
          //     _name = user['name'];
          //   }
          // }
          arr.push({
            "user_id": elem.user_id,
            "user_name": _name,
            "distance": gps_distance(myCoords.latitude, myCoords.longitude, coords.latitude, coords.longitude)
          });
        });
        return arr;
      })
      .subscribe( data => {
        this.distances = data;
      })
  }
}
