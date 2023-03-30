import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodoActions.module.css';

function TodoActions({ resetTodos, deleteComplitedTodos, compiltedCount }) {
  return (
    <div className={styles.todoActionsContainer}>
      <Button onClick={resetTodos} title='Reset all todos'>
        <RiRefreshLine className={`${styles.icon} ${styles.refresh}`} />
      </Button>
      <Button onClick={deleteComplitedTodos} title='Delete completed todos' disabled={!compiltedCount}>
        <RiDeleteBin2Line className={`${styles.icon} ${!compiltedCount ? '' : styles.delete}`} />
      </Button>
    </div>
  );
}

export default TodoActions;
