import { RootState } from "..";

export const selectName = (state: RootState) => state.profile.name;
export const selectShowName = (state: RootState) => state.profile.showName;
