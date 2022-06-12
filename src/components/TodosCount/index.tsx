import styles from "./todoscount.module.scss";

interface TodosCountProps {
  todos?: string[];
}

export function TodosCount({ todos }: TodosCountProps) {
  return (
    <header className={styles.todosHeader}>
      <div className={styles.todosCreated}>
        <strong>Tarefas criadas</strong>
        {/* <span>{todos.length}</span> */}
      </div>

      <div className={styles.todosFinished}>
        <strong>Concluídas</strong>
        <span>0</span>
      </div>
    </header>
  );
}
