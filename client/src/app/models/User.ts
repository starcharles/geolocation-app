import {UserRole} from "./UserRole";

export interface User {
  id: number;
  name: string;
  role: UserRole;

  isAdmin(): boolean;
  isGameMaster: boolean;
  isUser(): boolean;
  isNoAuthUser(): boolean;
}
