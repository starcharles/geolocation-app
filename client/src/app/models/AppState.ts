import {User} from './User';
import {Message} from './Message';
import {GeoLocation} from './GeoLocation';
import {Distance} from './Distance';
import {MySelf} from './MySelf';

export interface AppState {
  // グローバル変数

  myself: MySelf;
  users: User[];
  messages: Message[];
  positions: GeoLocation[];
  distances: Distance[];
  initialized: boolean; // アプリ初期化フラグ
}
