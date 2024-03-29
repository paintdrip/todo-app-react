import React from 'react';
import Form from './Form';
import Todo from './Todo';

const List: React.FunctionComponent = () => {
  const [todos, setTodos] = React.useState<
    Array<{ id: number; isComplete: boolean; text: string }>
  >([]);

  // Убираем спам пробелами, при его вводе в todo
  const addTodo = (todo: any) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const updateTodo = (todoId: any, newValue: any) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev: any) => prev.map((item: any) => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = (id: number) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const completeTodo = (id: number) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Какие записи сделаем на сегодня?</h1>
      <Form onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default List;
