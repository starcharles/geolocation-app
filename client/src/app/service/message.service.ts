import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Message} from '../models/Message';

@Injectable()
export class MessageService {
  constructor(private http: HttpClient) {
  }

  private messagesUrl = '/api/messages';

  public getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.messagesUrl);
  }

  public validateMessage(message: string): boolean {
    if (message === '') {
      return false;
    }
    return true;
  }
}
