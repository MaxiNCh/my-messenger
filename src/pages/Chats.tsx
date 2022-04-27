import { Container } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ChatList from "../components/ChatList";
import Chat from "../components/Chat";
import IChat from "../interfaces/Chat";
import ChatForm from "../components/ChatForm";
import { useAppSelector } from "../hooks";
import { selectChats } from "../store/chats/selectors";
import { selectMessages } from "../store/messages/selectors";
import { shallowEqual } from "react-redux";

function Chats() {
  const navigate = useNavigate();
  const chatList = useAppSelector(selectChats, shallowEqual);
  const { chatId } = useParams();

  let currentChat: IChat | undefined;

  const chatExists = (chatId: string): boolean => {
    return chatList.findIndex((chat) => chat.id === chatId) !== -1;
  }

  if (chatId) {
    if (!chatExists) {
      navigate('/chat');
    } else {
      currentChat = chatList.find((chat) => chat.id === chatId);
    }
  }

  return (
    <Container maxWidth="xl">
      <ChatForm />
      <div>
        <ChatList chats={chatList} />
      </div>
      <div>
        {!!currentChat
          ? <Chat chat={currentChat} />
          : <div style={{ textAlign: 'center' }}>Choose a chat</div>}
      </div>
    </Container >
  );
}

export default Chats;
