import { createContext, useState } from "react";

interface NewTodoContext {
  newTodo: { id: string; content: string; done: boolean };
  setNewTodo: React.Dispatch<
    React.SetStateAction<{
      id: string;
      content: string;
      done: boolean;
    }>
  >;
}

interface NewTodoContextProviderProps {
  children: React.ReactNode;
}

export const NewTodoContext = createContext({} as NewTodoContext);

export function NewTodoContextProvider({
  children,
}: NewTodoContextProviderProps) {
  const [newTodo, setNewTodo] = useState<{
    id: string;
    content: string;
    done: boolean;
  }>({ id: "", content: "", done: false });

  return (
    <NewTodoContext.Provider value={{ newTodo, setNewTodo }}>
      {children}
    </NewTodoContext.Provider>
  );
}
