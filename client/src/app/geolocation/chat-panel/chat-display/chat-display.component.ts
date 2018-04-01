import {Component, Input, OnInit} from '@angular/core';
import {ChatMessage} from "../../../models/ChatMessage";

@Component({
  selector: 'chat-display',
  templateUrl: './chat-display.component.html',
  styleUrls: ['./chat-display.component.css']
})
export class ChatDisplayComponent implements OnInit {

  constructor() { }
  @Input() chatMessages: ChatMessage[];

  ngOnInit() {
  }

  showChatMessages(): void {

  }
}
