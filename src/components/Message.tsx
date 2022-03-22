import '../styles/Message.css';

interface MessageProps {
  text: string;
}

function Message({ text }: MessageProps) {
  return (
    <div className='message'>
      {text}
    </div>
  );
}

export default Message;
