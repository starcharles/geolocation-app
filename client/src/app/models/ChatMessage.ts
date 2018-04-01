export interface ChatMessage {
  id?: number;
  user_id: number;
  name: string
  message: string;
  isMe: boolean;
  expire?: number
}
