import uniqid from 'uniqid';
import { useState } from 'react';
import './App.css';
import TodoActions from './components/Todos/TodoActions';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

function App() {
  const [todos, setTodo] = useState([]);

  const addTodoHandler = (text) => {
    const todo = {
      text,
      isComplited: false,
      id: uniqid(),
    };
    setTodo([...todos, todo]);
  };

  const deleteTodoHandler = (id) => {
    setTodo(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodo(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isComplited: !todo.isComplited }
          : { ...todo };
      })
    );
  };

  const resetTodosHandler = () => {
    setTodo([]);
  };


  const deleteComplitedTodosHandler = () => {
    setTodo(todos.filter((todo) => !todo.isComplited));
  };

  const compiltedCount = todos.filter((todo) => todo.isComplited).length;
  
  return (
    <div className='App'>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {todos.length > 0 && (
        <TodoActions
          resetTodos={resetTodosHandler}
          deleteComplitedTodos={deleteComplitedTodosHandler}
          compiltedCount={compiltedCount}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {!!compiltedCount && <h3>You have complited {compiltedCount} {compiltedCount > 1 ? 'todos' : 'todo'}</h3>}
    </div>
  );
}

export default App;
