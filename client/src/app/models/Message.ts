export interface Message {
  id: number;
  user_id: number;
  message: string;
  expire?: number;
}
