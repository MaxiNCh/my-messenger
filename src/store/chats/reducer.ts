import IChat from "../../interfaces/Chat";
import { ADD_CHAT, REMOVE_CHAT } from "./actionTypes";
import * as actions from './actionCreators';

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export const initialState: IChat[] = [
  {
    name: 'Friends',
    id: '1'
  },
  {
    name: 'Job',
    id: '2'
  },
  {
    name: 'Family',
    id: '3'
  }
]

export const chatsReducer = (state = initialState, { type, payload }: ActionTypes) => {
  switch (type) {
    case ADD_CHAT: {
      return [...state, payload]
    }
    case REMOVE_CHAT: {
      return state.filter((chat) => chat.id !== payload)
    }
    default:
      return state;
  }
}
