import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import  * as dummy_positions from '../data/positions.json';


@Injectable()
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  createDb() {
    let positions = dummy_positions;
    return {positions};
  }
}
