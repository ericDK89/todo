import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent } from "react";
import { useTodo } from "../../hooks/useTodo";
import styles from "./addnewtodo.module.scss";

interface AddNewTodoProps {
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
}

export function AddNewTodo({ setTodos }: AddNewTodoProps) {
  const { setNewTodo, newTodo } = useTodo();

  function handleCreateNewTodo(e: ChangeEvent<HTMLInputElement>): void {
    e.preventDefault();
    e.currentTarget.setCustomValidity("");
    setNewTodo(e.currentTarget.value);
  }

  function invalidData(e: ChangeEvent<HTMLInputElement>): void {
    e.currentTarget.setCustomValidity("Campo obrigatório");
  }

  function handleAddNewTodo(e: FormEvent) {
    e.preventDefault();
    console.log(newTodo);
    setTodos((previousState) => [...previousState, newTodo]);
    setNewTodo("");
  }

  const verifyIfTodoExists = newTodo.trim().length === 0;

  return (
    <form onSubmit={handleAddNewTodo} className={styles.addNewTodo}>
      <input
        placeholder="Adicione uma nova tarefa"
        required
        value={newTodo}
        onChange={handleCreateNewTodo}
        onInvalid={invalidData}
      />
      <button type="submit" disabled={verifyIfTodoExists}>
        Criar <PlusCircle size={16} />
      </button>
    </form>
  );
}
