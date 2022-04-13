import { useEffect, useMemo, useRef } from "react";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";
import IChat from "../interfaces/Chat";
import IMessage from "../interfaces/Message";
import { AUTHORS } from "../utils/consts";
import ClearIcon from '@mui/icons-material/Clear';
import "../styles/Chat.css";
import { Tooltip } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectMessageByChatId } from "../store/messages/selectors";
import { addMessage } from "../store/messages/actionCreators";
import { removeChat } from "../store/chats/actionCreators";
import { shallowEqual } from "react-redux";

interface MessagesProps {
  chat: IChat,
}

function Messages({ chat }: MessagesProps) {
  const dispatch = useAppDispatch();
  const timeoutID = useRef<NodeJS.Timeout>();
  const getChatMessages = useMemo(() => selectMessageByChatId(chat.id), [chat.id]);
  const chatMessages = useAppSelector(getChatMessages, shallowEqual);

  const sendMessage = (text: string) => {
    dispatch(addMessage(chat.id, {
      author: AUTHORS.person,
      text,
      date: new Date(),
      id: `msg-id-${Date.now()}`
    }))
  }

  const deleteClickHandler = () => {
    dispatch(removeChat(chat.id));
  }

  useEffect(() => {
    if (isLastMessageNotFromRobot(chatMessages)) {
      sendReplyFromRobotWithDelay();
    }

    function isLastMessageNotFromRobot(chatMessages: IMessage[]) {
      const lastIndex = chatMessages.length - 1;
      return chatMessages.length && chatMessages[lastIndex].author !== 'Robot'
    }

    function sendReplyFromRobotWithDelay(delay = 1500) {
      timeoutID.current = setTimeout(() => {
        dispatch(addMessage(chat.id, {
          author: AUTHORS.robot,
          text: 'Response to your message',
          date: new Date(),
          id: `msg-id-${Date.now()}`
        }))
      }, delay);
    }

    return () => {
      if (timeoutID.current) {
        clearTimeout(timeoutID.current)
      }
    };
  }, [chatMessages])


  return (
    <>
      <div className="chat-header">
        <h2 className="chat-name">{chat.name}</h2>
        <Tooltip title="Delete chat" placement="top">
          <div className="delete-button" onClick={deleteClickHandler}>
            <ClearIcon color="error" />
          </div>
        </Tooltip>
      </div >
      <MessageList messageList={chatMessages} />
      <MessageForm onSubmit={sendMessage}></MessageForm>
    </>
  );
}

export default Messages;
