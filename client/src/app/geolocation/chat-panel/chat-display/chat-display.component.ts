import {Component, Input, OnInit} from '@angular/core';
import {AppState} from '../../../models/AppState';

@Component({
  selector: 'app-chat-display',
  templateUrl: './chat-display.component.html',
  styleUrls: ['./chat-display.component.css']
})
export class ChatDisplayComponent implements OnInit {

  constructor() { }

  @Input() state: AppState;

  ngOnInit() {
  }
}
