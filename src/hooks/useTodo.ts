import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export function useTodo() {
  const value = useContext(TodoContext);

  return value;
}
