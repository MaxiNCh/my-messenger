import { useEffect, useState, useCallback } from 'react';

import Form from './components/Form';
import MessageList from './components/MessageList';

import IMessage from './interfaces/Message';
import { AUTHORS } from './utils/consts';


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
      <MessageList messageList={messageList} />
      <Form onSubmit={sendMessage}></Form>
    </div>
  );
}

export default App;
