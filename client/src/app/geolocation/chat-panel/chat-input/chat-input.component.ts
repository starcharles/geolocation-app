import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppState} from '../../../models/AppState';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {

  constructor() { }

  @Input() state: AppState;
  @Output() messageSubmitEvent = new EventEmitter();
  chatMessage = '';

  ngOnInit() {
  }

  submitMessage(): void {
    console.log(this.chatMessage);
    this.messageSubmitEvent.emit({'message': this.chatMessage});
  }
}
