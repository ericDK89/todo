import { CheckCircle, Circle, Trash } from "phosphor-react";
import { Dispatch, useEffect, useState } from "react";
import { Todo } from "../../App";
import styles from "./todos.module.scss";

interface TodosProps {
  deletedTodo: (deletedTodo: Todo) => void;
  todo: Todo;
  todos: Todo[];
  setTodosDoneCount: Dispatch<React.SetStateAction<number>>;
}

export function Todos({
  deletedTodo,
  todo,
  todos,
  setTodosDoneCount,
}: TodosProps) {
  const [isTodoDone, setIsTodoDone] = useState(false);

  function handleDeleteTodo() {
    deletedTodo(todo);
  }

  function handleMarkTodoAsDone() {
    setIsTodoDone((todo.done = !todo.done));
  }

  useEffect(() => {
    const total = todos.filter((todo) => todo.done === true).length;
    setTodosDoneCount(total);
  }, [isTodoDone, handleDeleteTodo]);

  return (
    <div className={styles.todosContainer}>
      <main className={styles.todosMainWithTodos}>
        <div className={styles.todosCheckboxAndText}>
          <button
            type="button"
            title="Marcar tarefa como feita"
            onClick={handleMarkTodoAsDone}
          >
            {isTodoDone ? (
              <CheckCircle size={24} weight="fill" color="#5e60ce" />
            ) : (
              <Circle size={24} color="#4ea8de" />
            )}
          </button>

          <p
            className={
              isTodoDone ? styles.setTodoAsDone : styles.setTodoAsNotDone
            }
          >
            {todo.content}
          </p>
        </div>

        <footer className={styles.todosFooter}>
          <button
            type="button"
            title="Deletar tarefa"
            onClick={handleDeleteTodo}
          >
            <Trash size={20} />
          </button>
        </footer>
      </main>
    </div>
  );
}
