import React, { useState, useEffect } from 'react';

function TodoForm({ addTodo, edit }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (edit) {
      setValue(edit.text);
    }
  }, [edit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={edit ? "Update todo" : "Add a new todo"}
      />
      <button type="submit">{edit ? "Update" : "Add"}</button>
    </form>
  );
}

export default TodoForm;
