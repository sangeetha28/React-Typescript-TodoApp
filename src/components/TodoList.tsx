import { link } from "fs";
import React from "react";

interface TodoListProps {
  items: { id: string; text: string }[];
  onDelete: (todoId: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li className="list-items" key={todo.id}>
          <span>{todo.text}</span>
          <button
            className="btn-delete"
            onClick={() => props.onDelete(todo.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
