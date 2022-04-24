import { RootState } from "..";

export const selectAuthed = (state: RootState) => state.user.authed;
export const selectUserName = (state: RootState) => state.user.data?.displayName;
