import List from '@mui/material/List';
import IChat from '../interfaces/Chat';
import ChatItem from './ChatItem';

interface ChatListProps {
  chats: IChat[]
}

function ChatList({ chats }: ChatListProps) {
  return (
    <List>
      {chats.map((chat) => <ChatItem key={chat.id} name={chat.name} />)}
    </List>
  );
}

export default ChatList;
