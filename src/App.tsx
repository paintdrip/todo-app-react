import React from 'react';
import './App.scss';
import List from './components/List';

// Основной файл с подключением компонентов
function App() {
  return (
    <div className="todo">
      <List />
    </div>
  );
}

export default App;
