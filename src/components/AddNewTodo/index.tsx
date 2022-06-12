import { PlusCircle } from "phosphor-react";
import { ChangeEvent, Dispatch, FormEvent, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { Todo } from "../../App";
import styles from "./addnewtodo.module.scss";

interface AddNewTodoProps {
  setTodos: Dispatch<React.SetStateAction<Todo[]>>;
}

export function AddNewTodo({ setTodos }: AddNewTodoProps) {
  const [text, setText] = useState("");

  function handleCreateNewTodo(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (!text) {
      return console.log("Can't be empty");
    } else {
      setTodos((previousState) => [
        ...previousState,
        { id: uuidV4(), content: text, done: false },
      ]);
      setText("");
    }
  }

  function newText(e: ChangeEvent<HTMLInputElement>): void {
    setText(e.target.value);
  }

  const verifyIfThereIsText = text.trim().length === 0;

  return (
    <form onSubmit={handleCreateNewTodo} className={styles.addNewTodo}>
      <input
        placeholder="Adicione uma nova tarefa"
        onChange={newText}
        value={text}
        required
      />
      <button type="submit" disabled={verifyIfThereIsText}>
        Criar <PlusCircle size={16} />
      </button>
    </form>
  );
}
