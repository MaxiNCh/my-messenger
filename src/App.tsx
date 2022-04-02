import { useEffect, useState, useCallback } from 'react';
import './styles/App.css';
import Form from './components/Form';
import MessageList from './components/MessageList';
import ChatList from './components/ChatList';
import IMessage from './interfaces/Message';
import IChat from './interfaces/Chat';
import { AUTHORS } from './utils/consts';

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


function App() {
  const [messageList, setMessageList] = useState<IMessage[]>([]);

  const addMessage = useCallback((newMessage: IMessage) => {
    setMessageList([...messageList, newMessage]);
  }, [messageList]);

  const sendMessage = (text: string) => {
    addMessage({
      author: AUTHORS.person,
      text,
      date: new Date(),
      id: `msg-id-${Date.now()}`
    })
  }

  useEffect(() => {
    let timeoutID: NodeJS.Timeout;

    if (messageList.length !== 0
      && messageList[messageList.length - 1].author !== 'Robot') {

      timeoutID = setTimeout(() => {
        addMessage({
          author: AUTHORS.robot,
          text: 'Response to your message',
          date: new Date(),
          id: `msg-id-${Date.now()}`
        });
      }, 1500);

    }

    return () => {
      if (timeoutID) {
        clearTimeout(timeoutID)
      }
    };
  }, [messageList, addMessage])

  return (
    <div className="App">
      <div>
        <ChatList chats={chats} />
      </div>
      <div>
        <MessageList messageList={messageList} />
        <Form onSubmit={sendMessage}></Form>
      </div>
    </div>
  );
}

export default App;
