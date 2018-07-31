import {UserRole} from './UserRole';
import {User} from './User';

export interface MySelf extends User {
  id: number;
  name: string;
  coordinates: Coordinates;
  role: UserRole;
}
