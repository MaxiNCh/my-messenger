import IChat from "../../interfaces/Chat";
import IChatMessages from "../../interfaces/ChatMessages";
import { addChat, removeChat } from "../chats/actionCreators";
import { ADD_CHAT, REMOVE_CHAT } from "../chats/actionTypes";
import { initialState as initialChats } from "../chats/reducer";
import { addMessage, ADD_MESSAGE } from './actionCreators';

const actions = { addMessage, addChat, removeChat };
type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type MessagesActionTypes = ReturnType<InferValueTypes<typeof actions>>;

const initialState: IChatMessages = initialChats.reduce((acc: { [key: string]: [] }, chat: IChat) => {
  acc[chat.id] = [];
  return acc;
}, {})

export const messagesReducer = (state = initialState, { type, payload }: MessagesActionTypes) => {
  switch (type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        [payload.chatId]: [
          ...state[payload.chatId],
          payload.message
        ]
      }
    }
    case REMOVE_CHAT: {
      const newState = { ...state };
      delete newState[payload];
      return newState;
    }
    case ADD_CHAT: {
      return {
        ...state,
        [payload.id]: []
      }
    }
    default:
      return state;
  }
}
