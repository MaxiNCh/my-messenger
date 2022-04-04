import { Button, Container } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ChatList from "../components/ChatList";
import Chat from "../components/Chat";
import IChat from "../interfaces/Chat";
import IChatMessages from "../interfaces/ChatMessages";
import IMessage from "../interfaces/Message";
import ChatForm from "../components/ChatFrom";


const chats: IChat[] = [
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

const allChatsMessages: IChatMessages = {
  1: [],
  2: [],
  3: []
}

function Chats() {
  const navigate = useNavigate();
  const [allMessages, setAllMessages] = useState<IChatMessages>(allChatsMessages);
  const [chatList, setChatList] = useState<IChat[]>(chats);
  const { chatId } = useParams();

  const chatExists = (chatId: string): boolean => {
    return chatList.findIndex((chat) => chat.id === chatId) !== -1;
  }

  let currentChatMessages: IMessage[] = [];
  let currentChat: IChat | undefined;

  if (chatId) {
    if (!chatExists) {
      navigate('/chat');
    } else {
      currentChat = chatList.find((chat) => chat.id === chatId);
      currentChatMessages = allMessages[chatId];
    }
  }

  const createChat = useCallback((name) => {
    const newIndex = getLastIndex(chatList) + 1 + '';
    setChatList((chats) => ([...chats, { name, id: newIndex }]));
    setAllMessages((messages) => ({ ...messages, [newIndex]: [] }));
  }, [chatList]);

  function getLastIndex(chats: IChat[]): number {
    const lastId: string = getLastElementId(chats);
    if (lastId) {
      return +lastId;
    }
    return 0;
  }

  function getLastElementId(array: IChat[]) {
    return array.slice().splice(-1)[0].id;
  }

  const deleteChat = useCallback((chatId) => {
    setAllMessages((messages) => {
      delete messages[chatId];
      return messages;
    })
    setChatList((chats) => {
      const updatedChats = chats.filter((chat) => chat.id !== chatId);
      return updatedChats;
    })
  }, [allMessages, chatList]);

  const addMessage = useCallback((newMessage: IMessage, chatId: string) => {
    setAllMessages({ ...allMessages, [chatId]: [...allMessages[chatId], newMessage] });
  }, [allMessages]);

  return (
    <Container maxWidth="xl">
      <ChatForm createChat={createChat} />
      <div>
        <ChatList chats={chatList} />
      </div>
      <div>
        {!!currentChat
          ? <Chat chatMessages={currentChatMessages} chat={currentChat} addMessage={addMessage} deleteChat={deleteChat} />
          : <div style={{ textAlign: 'center' }}>Choose a chat</div>}
      </div>
    </Container >
  );
}

export default Chats;
