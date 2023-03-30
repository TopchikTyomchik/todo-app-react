import { RiDeleteBin2Line, RiCheckFill, RiTodoFill } from 'react-icons/ri';
import styles from './Todo.module.css';

function Todo(props) {
  const { todo, deleteTodo, toggleTodo } = props;
  
  return (
    <div className={`${styles.todo} ${todo.isComplited ? styles.todoIsComplited : ''}`}>
      <RiTodoFill className={styles.icon} />
      <p>{todo.text}</p>
      <RiDeleteBin2Line
        className={`${styles.iconDelete} ${styles.icon}`}
        onClick={() => deleteTodo(todo.id)}
      />
      <RiCheckFill
        className={`${styles.iconComplite} ${styles.icon}`}
        onClick={() => toggleTodo(todo.id)}
      />
    </div>
  );
}

export default Todo;
