import { FormEvent, useState } from "react";

import '../styles/Form.css';

interface IFormProps {
  onSubmit(text: string): void
}

function Form({ onSubmit }: IFormProps) {
  const [text, setText] = useState('');

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(text);
    setText('');
  }

  const onChange = (e: FormEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
  }

  return (
    <form className="msg-form" onSubmit={onFormSubmit}>
      <label className="msg-form__label" htmlFor="text">Введите текст сообщения</label>
      <textarea className="msg-form__input" id="text" rows={5} value={text} onChange={onChange} />
      <input className="msg-form__submit" type="submit" value="Отправить" />
    </form>
  );
}

export default Form;
