import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {MessageService} from '../../service/message.service';
import {User} from '../../models/User';
import {Distance} from '../../models/Distance';
import * as gps_distance from 'gps-distance';
import {distanceOptions} from '../../settings/config';
import {GeolocationService} from '../../service/geolocation.service';
import {GeoLocation} from '../../models/GeoLocation';
import {Message} from '../../models/Message';

@Component({
  selector: 'app-chat-panel',
  templateUrl: './chat-panel.component.html',
  styleUrls: ['./chat-panel.component.css'],
  providers: [UserService, MessageService]
})

export class ChatPanelComponent implements OnInit {
  constructor(private userService: UserService,
              private geolocationService: GeolocationService,
              private messageService: MessageService) {
  }

  @Input() state;
  distanceOptions = distanceOptions;

  ngOnInit() {
    this.showMessages();
  }

  addChatMessage(event) {
    // TODO: メッセージのバリデーション(二重投稿、URLなど)
    if (!this.messageService.validateMessage(event.message)) {
      return;
    }
    const newMsg: Message = <Message> {
      'id': this.state.messages.length === 0 ? 1 : this.state.messages[this.state.messages.length - 1].id,
      'user_id': this.state.myself.id,
      'message': event.message
    };
    this.state.messages.push(newMsg);
    console.log(this.state.messages);
  }

  private showMessages(): void {
    this.messageService.getMessages()
      .subscribe(data => {
        this.state.messages = data;
      });
  }
}
