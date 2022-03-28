import { useEffect, useState } from 'react';

import Message from './components/Message';
import Form from './components/Form';

import IMessage from './interfaces/Message';


function App() {
  const [messageList, setMessageList] = useState<IMessage[]>([]);

  useEffect(() => {
    let timeoutID: NodeJS.Timeout;

    if (messageList.length !== 0
      && messageList[messageList.length - 1].author !== 'Robot') {

      timeoutID = setTimeout(() => {
        setMessageList((oldList) => [...oldList, {
          author: 'Robot',
          text: 'Response to your message',
          date: new Date()
        }])
      }, 1500);

    }

    return () => {
      if (timeoutID) {
        clearTimeout(timeoutID)
      }
    };
  }, [messageList])

  const addMessage = (text: string): void => {
    if (text) {
      setMessageList((oldList) => [...oldList, {
        author: 'Max',
        text,
        date: new Date()
      }])
    }
  }

  return (
    <div className="App">
      {messageList.map((message) => <Message message={message} />)}
      <Form onSubmit={addMessage}></Form>
    </div>
  );
}

export default App;
