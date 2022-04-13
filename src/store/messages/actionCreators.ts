import IMessage from "../../interfaces/Message"
export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (chatId: string, message: IMessage) => ({
  type: ADD_MESSAGE,
  payload: {
    chatId,
    message
  }
} as const)
