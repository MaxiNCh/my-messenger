import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

interface ChatItemProps {
  name: string
}

function ChatItem({ name }: ChatItemProps) {
  return (
    <ListItem >
      <ListItemButton sx={{ bgcolor: 'text.disabled' }}>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
}

export default ChatItem;
