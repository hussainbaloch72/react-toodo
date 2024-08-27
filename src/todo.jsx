import React from 'react';

function Todo({ todo, index, toggleComplete, deleteTodo, startEdit }) {
  return (
    <li>
      <span style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
        {todo.text}
      </span>
      <button onClick={() => toggleComplete(index)}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => startEdit(index)}>Edit</button>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  );
}

export default Todo;
