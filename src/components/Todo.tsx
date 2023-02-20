import React from 'react';
import Form from './Form';
import { RiCloseCircleLine } from 'react-icons/ri';
import { RiEdit2Line } from 'react-icons/ri';

type TodoProps = {
  todos: any;
  completeTodo: any;
  removeTodo: any;
  updateTodo: any;
};

type ObjectPropsItem = {
  id: null;
  value: string;
};

const Todo: React.FunctionComponent<TodoProps> = ({
  todos,
  completeTodo,
  removeTodo,
  updateTodo,
}) => {
  const [edit, setEdit] = React.useState<ObjectPropsItem>({
    id: null,
    value: '',
  });

  const submitUpdate = (value: { id: number; text: string }) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  //fix
  const searchBarProps = {
    edit: edit,
  };

  if (edit.id) {
    return <Form {...searchBarProps} onSubmit={submitUpdate} />;
  }

  return todos.map((todo: any, index: number) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className="delete-icon" />
        <RiEdit2Line
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};

export default Todo;
