import { Circle, Trash } from "phosphor-react";
import { MouseEventHandler } from "react";
import clipboardImg from "../../assets/images/clipboard.png";
import styles from "./todos.module.scss";

interface TodosProps {
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
  todos: string[];
}

export function Todos({ todos, setTodos }: TodosProps) {
  const verifyIfExistsATodo = todos.length === 0;

  function handleDeleteTodo(deletedTodo: MouseEventHandler<HTMLButtonElement>): void {
    const todosWithoutDeleteTodo = todos.filter((todo) => todo !== deletedTodo);
    setTodos(todosWithoutDeleteTodo);
  }

  return (
    <div className={styles.todosContainer}>
      <header className={styles.todosHeader}>
        <div className={styles.todosCreated}>
          <strong>Tarefas criadas</strong>
          <span>0</span>
        </div>

        <div className={styles.todosFinished}>
          <strong>Concluídas</strong>
          <span>0</span>
        </div>
      </header>

      {verifyIfExistsATodo ? (
        <main className={styles.todosMainWithoutTodos}>
          <img src={clipboardImg} alt="Sem tarefas" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </main>
      ) : (
        todos.map((item, index) => {
          return (
            <main className={styles.todosMainWithTodos}>
              <div className={styles.todosCheckboxAndText}>
                <button type="button" title="Marcar tarefa como feita">
                  <Circle size={24} />
                </button>
                <p key={index}>{item}</p>
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
          );
        })
      )}
    </div>
  );
}
