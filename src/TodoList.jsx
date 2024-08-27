import React from 'react';
import Todo from './Todo';

function TodoList({ todos, toggleComplete, deleteTodo, startEdit }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          startEdit={startEdit}
        />
      ))}
    </ul>
  );
}

export default TodoList;
