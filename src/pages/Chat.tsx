import { Container } from "@mui/material";
import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import ChatList from "../components/ChatList";
import IChat from "../interfaces/Chat";


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

function Chat() {
  const { chatId } = useParams();
  const navigate = useNavigate();

  const chatExists = (chatId: (string | undefined)) => {
    return chats.findIndex((chat) => chat.id === chatId) !== -1;
  }

  useEffect(() => {
    if (chatId && !chatExists(chatId)) {
      navigate('/chat');
    }

  }, [chatId, navigate])



  return (
    <Container maxWidth="xl">
      <div>
        <ChatList chats={chats} />
      </div>
      <div>
        <Outlet />
        {!!chatId || <div style={{ textAlign: 'center' }}>Choose a chat</div>}
      </div>
    </Container >
  );
}

export default Chat;
