import List from '@mui/material/List';
import IChat from '../interfaces/Chat';
import ChatItem from './ChatItem';

interface ChatListProps {
  chats: IChat[]
}

function ChatList({ chats }: ChatListProps) {
  return (
    <List>
      {chats.map((chat) => <ChatItem key={chat.id} chat={chat} />)}
    </List>
  );
}

export default ChatList;
