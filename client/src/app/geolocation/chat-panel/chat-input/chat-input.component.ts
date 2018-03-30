import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {

  constructor() { }
  @Output() messageSubmitEvent = new EventEmitter();
  chatMessage: string ='';

  ngOnInit() {
  }

  submitMessage(): void{
    if(this.chatMessage === '') return;
    console.log(this.chatMessage);
    this.messageSubmitEvent.emit({"message": this.chatMessage})
  }
}
