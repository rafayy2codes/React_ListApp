import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/model';
import TodoList from './components/TodoList';




const App: React.FC = () => {

  const [todo, settodo] = useState<string>("")
  const [todos, settodos] = useState<Todo[]>([]);


  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      settodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
      settodo('');
    }

  }

  return (
    <div className="App">
      <span className="heading">Make your list</span>
      <InputField todo={todo} settodo={settodo} handleAdd={handleAdd} />
      <TodoList todos={todos} settodos={settodos} />

    </div>
  );
};

export default App;
