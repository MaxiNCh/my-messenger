import { ChaletOutlined } from "@mui/icons-material";
import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import MessageForm from "../components/MessageForm";
import MessageList from "../components/MessageList";
import IMessage from "../interfaces/Message";
import { AUTHORS } from "../utils/consts";

interface IChatMessages {
  [key: string]: IMessage[]
}

const messages = {
  1: [],
  2: [],
  3: []
}


function Messages() {
  const [messageList, setMessageList] = useState<IChatMessages>(messages);

  const timeoutID = useRef<NodeJS.Timeout>();

  const { chatId } = useParams();


  const addMessage = useCallback((newMessage: IMessage) => {
    if (chatId !== undefined) {
      setMessageList({ ...messageList, [chatId]: [...messageList[chatId], newMessage] });
    }
  }, [messageList, chatId]);

  const sendMessage = (text: string) => {
    addMessage({
      author: AUTHORS.person,
      text,
      date: new Date(),
      id: `msg-id-${Date.now()}`
    })
  }

  useEffect(() => {
    if (isLastMessageNotFromRobot(messageList)) {
      sendReplyFromRobotWithDelay();
    }

    function isLastMessageNotFromRobot(messageList: IChatMessages) {
      if (chatId && messageList[chatId]) {
        const chatMessages = messageList[chatId];
        const lastIndex = chatMessages.length - 1;
        return chatMessages.length && chatMessages[lastIndex].author !== 'Robot'
      }
      return false;
    }

    function sendReplyFromRobotWithDelay(delay = 1500) {
      timeoutID.current = setTimeout(() => {
        addMessage({
          author: AUTHORS.robot,
          text: 'Response to your message',
          date: new Date(),
          id: `msg-id-${Date.now()}`
        });
      }, delay);
    }

    return () => {
      if (timeoutID.current) {
        clearTimeout(timeoutID.current)
      }
    };
  }, [messageList, addMessage, chatId])

  return (
    <>
      {chatId && messageList[chatId] && (
        <>
          <MessageList messageList={messageList[chatId]} />
          <MessageForm onSubmit={sendMessage}></MessageForm>
        </>
      )}
    </>
  );
}

export default Messages;
