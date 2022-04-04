import { Button, TextField } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { ChangeEvent, FormEvent, useState } from "react";
import '../styles/ChatForm.css';

interface ChatFormProps {
  createChat(name: string): void
}

function ChatForm({ createChat }: ChatFormProps) {
  const [text, setText] = useState('');

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text !== '') {
      createChat(text);
      setText('');
    }
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  }
  return (
    <form className="chat-form" onSubmit={onFormSubmit}>
      <TextField label="New chat name" size="small" color="secondary" value={text} onChange={onChange} />
      <Button type="submit" size="small" color="secondary" endIcon={<AddBoxIcon />}>
        Create
      </Button>
    </form>
  );
}

export default ChatForm;
