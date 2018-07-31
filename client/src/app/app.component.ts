import {Component, OnInit} from '@angular/core';
import {SharedDataService} from './service/shared-data.service';
import {UserService} from './service/user.service';
import {GeolocationService} from './service/geolocation.service';
import {MessageService} from './service/message.service';
import {AppState} from './models/AppState';
import {Message} from './models/Message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SharedDataService, UserService, GeolocationService, MessageService]
})

export class AppComponent implements OnInit {

  constructor(private shared: SharedDataService,
              private userService: UserService,
              private geolocationService: GeolocationService,
              private messageService: MessageService) {
  }

  private _appState: AppState;

  ngOnInit() {
    // TODO:
    // 0. login処理//　myselfにユーザー設定
    // 1. ユーザー情報（位置情報、ログイン情報取得) if logged_in;
    // 2. this.sharedDataService.getLocalUsers();ユーザー位置情報等に基づき、周辺ユーザーデータを取得
    // 3. appStateをセットする
    this._appState = this.shared.getState();
    this._appState.initialized = false;

    if (this.isLoggedIn()) {
      this.userService.getMyself().toPromise()
        .then(result => {
          this.shared.setState('myself', result);
          console.log(this.shared.getState());
          return this.showMyGeolocation();
        })
        .then(result => {
          const myself = this.shared.getState().myself;
          myself.coordinates = result;
          this.shared.setState('myself', myself);
          console.log(this.shared.getState());
          return this.getLocalUsers(result);
        })
        .then(result => {
          this.shared.setState('users', result.users);
          this.shared.setState('positions', result.positions);
          return this.geolocationService.calcDistances(this.shared.getState());
        })
        .then(data => {
          console.log(this.shared.getState());
          this.shared.setState('distances', data);
          return this.fetchMessages();
        })
        .then(data => {
          this.shared.setState('messages', data);
          console.log(this.shared.getState());
          return this.getAppState();
        })
        .then(data => {
          this.shared.setState('initialized', true);
          console.log(this.shared.getState());
        })
        .catch(err => {
          alert('アプリの初期化に失敗しました。リロードまたはインターネットの接続状況を改善してください。');
          console.log(err);
        });
    }

    // 4. websocketの確立をする
    // 他ユーザーとのwebsocket確立

  }

  private isLoggedIn(): boolean {
    return true;
  }

  private showMyGeolocation(): Promise<Coordinates> {
    return new Promise((resolve, reject) => {
      this.geolocationService.getMyGeolocation()
        .subscribe(res => {
          resolve(res.coords);
        }, err => {
          reject(err);
        });
    });
  }

  private getAppState(): Promise<AppState> {
    return new Promise((resolve, reject) => {
      this._appState = this.shared.getState();
      if (this._appState) {
        resolve(this._appState);
      } else {
        reject('state is set');
      }
    });
  }

  private getLocalUsers(coords: Coordinates): Promise<any> {
    return new Promise((resolve, reject) => {
      this.userService.getLocalUsers(coords)
        .subscribe(data => {
          resolve(data);
        }, err => reject(err));
    });
  }

  private fetchMessages(): Promise<Message[]> {
    return this.messageService.getMessages().toPromise();
  }
}
