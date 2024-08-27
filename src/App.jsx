import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';
import { db } from './firebase';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';

function App() {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      const todosCollection = collection(db, 'todos');
      const todosSnapshot = await getDocs(todosCollection);
      const todosList = todosSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setTodos(todosList);
    };
    fetchTodos();
  }, []);

  const addTodo = async (text) => {
    const newTodo = {
      text,
      completed: false
    };
    const docRef = await addDoc(collection(db, 'todos'), newTodo);
    setTodos([...todos, { ...newTodo, id: docRef.id }]);
  };

  const updateTodo = async (newText) => {
    const todoRef = doc(db, 'todos', edit.id);
    await updateDoc(todoRef, { text: newText });
    setTodos(todos.map(todo => todo.id === edit.id ? { ...todo, text: newText } : todo));
    setEdit(null);
  };

  const toggleComplete = async (id, completed) => {
    const todoRef = doc(db, 'todos', id);
    await updateDoc(todoRef, { completed: !completed });
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !completed } : todo));
  };

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const startEdit = (index) => {
    setEdit({ id: todos[index].id, text: todos[index].text });
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      {edit ? (
        <TodoForm addTodo={updateTodo} edit={edit} />
      ) : (
        <TodoForm addTodo={addTodo} />
      )}
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        startEdit={startEdit}
      />
    </div>
  );
}

export default App;
