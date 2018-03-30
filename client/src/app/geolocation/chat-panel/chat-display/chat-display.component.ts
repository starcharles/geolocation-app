import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../../models/Message";

@Component({
  selector: 'chat-display',
  templateUrl: './chat-display.component.html',
  styleUrls: ['./chat-display.component.css']
})
export class ChatDisplayComponent implements OnInit {

  constructor() { }
  @Input() chatMessages: Message[];

  ngOnInit() {
  }

  showMessages(): void {

  }
}
