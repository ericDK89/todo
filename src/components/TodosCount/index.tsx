import styles from "./todoscount.module.scss";

interface TodosCountProps {
  todosQuantity: number;
  todosDoneCount: number;
}

export function TodosCount({ todosQuantity, todosDoneCount }: TodosCountProps) {
  return (
    <header className={styles.todosHeader}>
      <div className={styles.todosCreated}>
        <strong>Tarefas criadas</strong>
        <span>{todosQuantity}</span>
      </div>

      <div className={styles.todosFinished}>
        <strong>Concluídas</strong>
        <span>
          {todosDoneCount} de {todosQuantity}
        </span>
      </div>
    </header>
  );
}
