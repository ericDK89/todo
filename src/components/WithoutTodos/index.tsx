import clipboardImg from "../../assets/images/clipboard.png";
import styles from "./withouttodos.module.scss";

export function WithoutTodos() {
  return (
    <main className={styles.todosMainWithoutTodos}>
      <img src={clipboardImg} alt="Sem tarefas" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </main>
  );
}
