import {UserRole} from './UserRole';

export interface User {
  id: number;
  name: string;
  role?: UserRole;
}
