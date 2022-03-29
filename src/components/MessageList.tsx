import IMessage from '../interfaces/Message';
import Message from './Message';


interface MessageListProps {
  messageList: IMessage[]
}

function MessageList({ messageList }: MessageListProps) {
  return (
    <>
      {messageList.map((message) => <Message key={message.id} message={message} />)}
    </>
  )
}

export default MessageList;
