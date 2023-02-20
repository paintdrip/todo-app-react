import React, { MutableRefObject, useEffect } from 'react';

const Form: React.FunctionComponent = (props: any) => {
  const [input, setInput] = React.useState('');

  const inputRef = React.useRef<HTMLInputElement>(null!);

  // поставить проверку
  React.useEffect(() => {
    inputRef.current.focus();
  });

  // Сохранение значения введенного инпута
  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  // Обход перезагрузки страницы
  const handleSubmit = (e: any) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Напиши что нибудь"
        value={input}
        name="text"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button">Добавить</button>
    </form>
  );
};

export default Form;
