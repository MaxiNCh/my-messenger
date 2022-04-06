import { FormEvent, useRef, useState, useEffect, RefObject, ChangeEvent } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send'

import '../styles/Form.css';

interface IFormProps {
  onSubmit(text: string): void
}

function MessageForm({ onSubmit }: IFormProps) {
  const [text, setText] = useState('');

  const messageInput: RefObject<HTMLInputElement> = useRef(null);

  useEffect(() => {
    messageInput.current?.focus();
  })

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text !== '') {
      onSubmit(text);
      setText('');
    }
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  }

  return (
    <form className="msg-form" onSubmit={onFormSubmit}>
      <TextField
        inputRef={messageInput}
        id="text"
        sx={{ mb: 2, width: '100%' }}
        label="Message text"
        variant="outlined"
        color="secondary"
        size="small"
        value={text}
        onChange={onChange}
      />
      <br />
      <Button type="submit" disabled={!text} size="small" color="secondary" variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </form>
  );
}

export default MessageForm;
