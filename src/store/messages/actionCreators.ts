import IMessage from "../../interfaces/Message"
import { ADD_MESSAGE } from "./actionTypes"

export const addMessage = (chatId: string, message: IMessage) => ({
  type: ADD_MESSAGE,
  payload: {
    chatId,
    message
  }
} as const)
