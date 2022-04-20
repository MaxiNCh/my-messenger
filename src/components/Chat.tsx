import { useMemo } from "react";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";
import IChat from "../interfaces/Chat";
import { AUTHORS } from "../utils/consts";
import "../styles/Chat.css";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectMessageByChatId } from "../store/messages/selectors";
import { addMessageWithReply } from "../store/messages/actionCreators";
import { removeChat } from "../store/chats/actionCreators";
import { shallowEqual } from "react-redux";
import ChatHeader from "./ChatHeader";

interface MessagesProps {
  chat: IChat,
}

function Messages({ chat }: MessagesProps) {
  const dispatch = useAppDispatch();
  const getChatMessages = useMemo(() => selectMessageByChatId(chat.id), [chat.id]);
  const chatMessages = useAppSelector(getChatMessages, shallowEqual);

  const sendMessage = (text: string) => {
    dispatch(addMessageWithReply(chat.id, {
      author: AUTHORS.person,
      text,
      date: new Date(),
      id: `msg-id-${Date.now()}`
    }))
  }

  const deleteChat = () => {
    dispatch(removeChat(chat.id));
  }

  return (
    <>
      <ChatHeader name={chat.name} deleteChat={deleteChat} />
      <MessageList messageList={chatMessages} />
      <MessageForm onSubmit={sendMessage}></MessageForm>
    </>
  );
}

export default Messages;
