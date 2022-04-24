import { UserInfo } from "firebase/auth"
import * as actions from './actionCreators';
import { SET_AUTHED, SET_USER } from "./actionTypes";

type userState = {
  data: UserInfo | null;
  authed: boolean;
}

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export const initialState: userState = {
  data: null,
  authed: false
}

export const userReducer = (state = initialState, { type, payload }: ActionTypes) => {
  switch (type) {
    case SET_USER: {
      return { ...state, data: payload }
    }
    case SET_AUTHED: {
      return { ...state, authed: payload }
    }
    default:
      return state;
  }
}
