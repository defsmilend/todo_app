import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {

  const [newTodo, setNewtodo] = useState('')
  const [todos, setTodos] = useState([])


  function handleNewTodoChange(e) {
    e.preventDefault();
    setNewtodo(e.target.value)
  }

  function handleNewTodo(e) {
    e.preventDefault();
    if (newTodo === '') return
    setTodos([...todos, { id: Date.now(), text: newTodo }])
    setNewtodo('');
    e.target.reset()
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }


  return (
    <div className="App">
      <div className="demo-component">
        <h1>Todos</h1>

        <form onSubmit={handleNewTodo} className="todoform">
          <div className="todoinput">
            <input placeholder="Write your todo" value={newTodo} onChange={handleNewTodoChange} />
          </div>
          <ul className="todolist">
            {todos.map((todo) => (
              <li key={todo.id} className="todo">
                {todo.text}
                <a onClick={() => removeTodo(todo.id)}>x</a>
              </li>
            ))}
          </ul>
        </form>
      </div>
    </div>
  );
}

export default App;
