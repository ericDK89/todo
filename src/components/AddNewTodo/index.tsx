import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { useNewTodo } from "../../hooks/useNewTodo";
import styles from "./addnewtodo.module.scss";

interface AddNewTodoProps {
  setTodos: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        content: string;
        done: boolean;
      }[]
    >
  >;
}

export function AddNewTodo({ setTodos }: AddNewTodoProps) {
  const [text, setText] = useState("");
  const { newTodo, setNewTodo } = useNewTodo();

  function handleCreateNewTodo(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setNewTodo({ id: uuidV4(), content: text, done: false });
    setTodos((previousState) => [...previousState, newTodo]);
    setText("");
  }

  function newText(e: ChangeEvent<HTMLInputElement>): void {
    setText(e.target.value);
    console.log(text);
  }

  return (
    <form onSubmit={handleCreateNewTodo} className={styles.addNewTodo}>
      <input
        placeholder="Adicione uma nova tarefa"
        onChange={newText}
        value={text}
      />
      <button type="submit">
        Criar <PlusCircle size={16} />
      </button>
    </form>
  );
}
