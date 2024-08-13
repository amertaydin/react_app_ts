import React from "react";
import "./TodoList.css";
interface ToDoListProps {
  items: { id: string; text: string }[];
  onDeleteToDo: (id: string) => void;
}

const TodoList: React.FC<ToDoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={props.onDeleteToDo.bind(null, todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
