import { useContext } from "react";
import { NewTodoContext } from "../context/NewTodoContext";

export function useNewTodo() {
  const value = useContext(NewTodoContext);

  return value;
}
