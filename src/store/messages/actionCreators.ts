import IMessage from "../../interfaces/Message"
export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const ADD_MESSAGE_WITH_REPLY = 'MESSAGES::ADD_MESSAGE_WITH_REPLY';

export const addMessage = (chatId: string, message: IMessage) => ({
  type: ADD_MESSAGE,
  payload: {
    chatId,
    message
  }
} as const)

export const addMessageWithReply = (chatId: string, message: IMessage) => ({
  type: ADD_MESSAGE_WITH_REPLY,
  payload: {
    chatId,
    message
  }
} as const)
