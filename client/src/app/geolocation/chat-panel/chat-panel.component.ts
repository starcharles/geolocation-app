import {Component, Input, OnInit} from '@angular/core';
import {distanceOptions} from "../../settings/config"
import {UserService} from '../../service/user.service';
import {ChatMessageService} from '../../service/chat-message.service';
import {User} from "../../models/User";
import {Distance} from "../../models/Distance";
import {GeoLocation} from "../../models/GeoLocation";
import {ChatMessage} from "../../models/ChatMessage";

@Component({
  selector: 'chat-panel',
  templateUrl: './chat-panel.component.html',
  styleUrls: ['./chat-panel.component.css'],
  providers: [UserService,ChatMessageService]
})

export class ChatPanelComponent implements OnInit {
  constructor(
    private userService:UserService,
    private chatMessageService: ChatMessageService,
              ) { }

  @Input() myCoordinates;
  positions: GeoLocation[];
  users: User[];
  distances: Distance[];
  chatMessages: ChatMessage[] =[];
  selectedDistance: number;
  showDistance = false;
  distanceOptions = distanceOptions;

  // TODO:ログイン、ユーザー情報保持
  //ログイン中ユーザー情報（本当はアプリ内のグローバル変数
  myself = <User>{
    "id":10,
    "name": "taro"
  };

  // ngOnInit() {
    // this.getUsers();
    // this.showChatMessages();
  // }

  ngOnInit() {
    this.fetchChatMessages(1111,this.myself.id);
  }

  fetchChatMessages(roomNumber:number, user_id: number){

    this.chatMessageService.connect(roomNumber, user_id).subscribe(msg => {
      // const isMyself = msg.user_id === this.name;
      let chatMsg = <ChatMessage>{
        "user_id": msg.user_id,
        "message": msg.message,
        "isMe": msg.user_id === this.myself.id
      };
      this.chatMessages.push(chatMsg);
    });
  };


  addChatMessage(event){
    if(!event.message) return;

    let newMsg: ChatMessage = <ChatMessage> {
      "id": this.chatMessages.length === 0 ? 1 :this.chatMessages[this.chatMessages.length-1].id,
      "user_id": this.myself.id,
      "message": event.message
    };
    this.chatMessages.push(newMsg);
    console.log(this.chatMessages);
  }

  // private  fetchChatMessages(): void{
  //   this.messageService.getChatMessages()
  //     .subscribe( data => {
  //       this.chatMessages = data;
  //     });
  // }

  // private getUsers(diameter: number = 0): void{
  // // private getUsers(): void{
  //   this.userService.getLocalUsers(0)
  //     .subscribe(data => this.users = data);
  // }

  private filterUsers($event){
    this.distances = this.userService.filterUsersByDistance(this.distances, this.selectedDistance);
  }
}
