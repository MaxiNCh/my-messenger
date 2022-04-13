import IChat from "../../interfaces/Chat";
import { ADD_CHAT, REMOVE_CHAT } from "./actionTypes";

export const addChat = (chat: IChat) => ({
  type: ADD_CHAT,
  payload: chat
} as const)

export const removeChat = (chatId: string) => ({
  type: REMOVE_CHAT,
  payload: chatId
} as const)

