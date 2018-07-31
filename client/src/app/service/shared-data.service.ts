import {Injectable} from '@angular/core';
import {AppState} from '../models/AppState';

@Injectable()
export class SharedDataService {

  private _appState: AppState = <AppState>{};

  constructor() { }

  public getState(): AppState {
    return this._appState;
  }

  public setState(target_name: string, newData: any): AppState {
    return this._appState[target_name] = newData;
  }
}
