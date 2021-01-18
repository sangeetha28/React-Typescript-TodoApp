import React, { useState } from "react";
import "./App.css";
import { Todo } from "./components/Todo.model";

import Todos from "./components/Todos";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodo] = useState<Todo[]>([]);
  const todoHandler = (text: string) => {
    setTodo((prevTodos) => [
      ...prevTodos,
      { id: (Math.random() * 6 + 1).toString(), text },
    ]);
  };

  const onDeleteHandler = (todoId: string) => {
    setTodo((prevTodos) => prevTodos.filter((todos) => todos.id !== todoId));
  };

  return (
    <div className="App">
      <Todos onTodoHandler={todoHandler} />
      <TodoList items={todos} onDelete={onDeleteHandler} />
    </div>
  );
}

export default App;
