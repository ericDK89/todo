import { useState } from "react";
import { AddNewTodo } from "./components/AddNewTodo";
import { Header } from "./components/Header";
import { Todos } from "./components/Todos";
import { TodoContextProvider } from "./context/TodoContext";
import styles from "./styles/wrapper.module.scss";

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <div className="App">
      <Header />

      <TodoContextProvider>
        <main className={styles.wrapper}>
          <AddNewTodo setTodos={setTodos} />
          <Todos todos={todos} setTodos={setTodos} />
        </main>
      </TodoContextProvider>
    </div>
  );
}

export default App;
