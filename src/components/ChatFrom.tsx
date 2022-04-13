import { Button, TextField } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import '../styles/ChatForm.css';
import { useAppDispatch, useAppSelector } from "../hooks";
import { addChat } from "../store/chats/actionCreators"
import IChat from "../interfaces/Chat";
import { selectChats } from "../store/chats/selectors";



function ChatForm() {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();
  const chats = useAppSelector(selectChats);

  const createChat = useCallback((name) => {
    const newId = getLastId(chats) + 1 + '';
    dispatch(addChat({ name, id: newId }));
  }, [chats]);

  function getLastId(chats: IChat[]): number {
    const lastId: string = getLastElementId(chats);
    if (lastId) {
      return +lastId;
    }
    return 0;
  }

  function getLastElementId(array: IChat[]) {
    return array.slice(-1)[0].id;
  }

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
