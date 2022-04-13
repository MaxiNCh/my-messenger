import { RootState } from "..";

export const selectMessages = (state: RootState) => state.messages;
export const selectMessageByChatId = (chatId: string) => (state: RootState) => state.messages[chatId];
