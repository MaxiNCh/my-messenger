import { Tooltip } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

interface ChatHeaderProps {
  name: string,
  deleteChat: () => void;
}

function ChatHeader({ name, deleteChat }: ChatHeaderProps) {
  return (
    <div className="chat-header">
      <h2 className="chat-name">{name}</h2>
      <Tooltip title="Delete chat" placement="top">
        <div className="delete-button" onClick={deleteChat}>
          <ClearIcon color="error" />
        </div>
      </Tooltip>
    </div >
  )
}

export default ChatHeader;
