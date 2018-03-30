import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import  * as dummy_positions from '../data/positions.json';
import  * as dummy_users from '../data/users.json';
import  * as dummy_messages from '../data/messages.json';
import  * as dummy_myself from '../data/myself.json';


@Injectable()
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb() {
    let positions = dummy_positions;
    let users = dummy_users;
    let messages = dummy_messages;
    let myself = dummy_myself;
    return {positions,users, messages, myself};
  }
}
