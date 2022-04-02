import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link, useParams } from 'react-router-dom';
import IChat from '../interfaces/Chat';

interface ChatItemProps {
  chat: IChat
}

function ChatItem({ chat }: ChatItemProps) {
  const { chatId } = useParams();

  const isChatOpened = chatId === chat.id;

  return (
    <ListItem >
      <ListItemButton to={`/chat/${chat.id}`} component={Link} sx={{ bgcolor: isChatOpened ? '#A28FA2' : 'thistle' }}>
        <ListItemText primary={chat.name} />
      </ListItemButton>
    </ListItem>
  );
}

export default ChatItem;
