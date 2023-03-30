import { useState } from 'react';
import Button from '../UI/Button';
import styles from './TodoForm.module.css';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  function onSubmitHandler(e) {
    e.preventDefault();
    if (text === '') {
      return alert('Введите todo');
    }
    addTodo(text);
    setText('');
  }
  return (
    <form onSubmit={onSubmitHandler} className={styles.todoContainer}>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type='submit' title='Sumbit todo'>
        Submit
      </Button>
    </form>
  );
}

export default TodoForm;
