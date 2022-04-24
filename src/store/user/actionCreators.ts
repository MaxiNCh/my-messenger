import { UserInfo } from "firebase/auth";
import { SET_AUTHED, SET_USER, AUTH_USER } from "./actionTypes";

export const setUser = (user: UserInfo | null) => ({
  type: SET_USER,
  payload: user
} as const)

export const setAuthed = (authed: boolean) => ({
  type: SET_AUTHED,
  payload: authed
} as const)

export const authUser = (user: UserInfo | null) => ({
  type: AUTH_USER,
  payload: user
} as const)
