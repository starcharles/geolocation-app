import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';
import {ChatMessage} from '../models/ChatMessage';
import {WebSocketService} from './websocket.service';
import * as config from '../settings/config';

@Injectable()
export class ChatMessageService {
  constructor(
    private http: HttpClient,
    private ws: WebSocketService
    ) {
  }

  private messages: Subject<ChatMessage>;
  private chatMessagesUrl = '/api/messages';
  private wsUrl(roomNumber: number, user_id: number): string {
    return `ws://${config.hostname}${this.chatMessagesUrl}/stream/${roomNumber}?user_id=${user_id}`;
  }

  public connect(roomNumber: number, user_id: number): Subject<ChatMessage> {
    return this.messages = <Subject<ChatMessage>>this.ws.connect(this.wsUrl(roomNumber, name))
      .map((response: MessageEvent): ChatMessage => {
        const data = JSON.parse(response.data) as ChatMessage;
        return data;
      });
  }

  // -- ③ メッセージの送信要求をがあったときは、WebSocketService の `next` メソッドを呼んでいるだけです
  send(user_id: number, name: string, message: string): void {
    const chmsg: ChatMessage = <ChatMessage> {
      'user_id': user_id,
      'name': name,
      'message': message
    };
    this.messages.next(chmsg);
  }

  // private createMessage(user_id:number, name: string, message: string): ChatMessage {
  //   return {
  //     "user_id":
  //
  //   }
  //   // return new ChatMessage(name, message, false);
  // }

  // public getChatMessages(): Observable<ChatMessage[]>{
  //   return this.http.get<ChatMessage[]>(this.chatMessagesUrl);
  // }

  // public createChatMessage(): ChatMessage| Error{
  //   let msg: ChatMessage;

    // if(){
    //   return msg;
    //
    // }else{
    //   let err: Error;
    //
    //   return err;
    // }
  // }

  public updateChatMessage(message_id: number) {

  }

  public deleteChatMessage(message_id: number) {

  }
}


