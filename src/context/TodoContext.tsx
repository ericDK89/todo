import { createContext, useState } from "react";

interface TodoContext {
  newTodo: string;
  setNewTodo: React.Dispatch<React.SetStateAction<string>>;
}

interface TodoContentProviderProps {
  children: React.ReactNode;
}

export const TodoContext = createContext({} as TodoContext);

export function TodoContextProvider({ children }: TodoContentProviderProps) {
  const [newTodo, setNewTodo] = useState("");

  return (
    <TodoContext.Provider value={{ newTodo, setNewTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
