import { CheckCircle, Trash } from "phosphor-react";
import styles from "./todos.module.scss";

interface TodosProps {
  content: string;
  deletedTodo: (deletedTodo: {
    id: string;
    content: string;
    done: boolean;
  }) => void;
  todo: {
    id: string;
    content: string;
    done: boolean;
  }[];
}

export function Todos({ content, deletedTodo, todo }: TodosProps) {
  function handleDeleteTodo() {
    deletedTodo(todo);
  }

  return (
    <div className={styles.todosContainer}>
      <main className={styles.todosMainWithTodos}>
        <div className={styles.todosCheckboxAndText}>
          <button type="button" title="Marcar tarefa como feita">
            <CheckCircle size={24} weight="fill" color="#5e60ce" />

            {/* <Circle size={24} color="#4ea8de" /> */}
          </button>

          <p className={styles.setTodoAsDone}>{content}</p>
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
