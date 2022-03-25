import { format } from 'date-fns';

import '../styles/Message.css';

import IMessage from '../interfaces/Message';
interface IMessageProps {
  message: IMessage
}

function Message({ message }: IMessageProps) {
  return (
    <div className='message'>
      {message.text}
      <div className='message__footer'>
        <span>{message.author} &ndash; </span>
        <span>{format(message.date, 'H:mm, dd MMMM yy')}</span>
      </div>
    </div>
  );
}

export default Message;
