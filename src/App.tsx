import { useState } from "react";
import { AddNewTodo } from "./components/AddNewTodo";
import { Header } from "./components/Header";
import { Todos } from "./components/Todos";
import { TodosCount } from "./components/TodosCount";
import { NewTodoContextProvider } from "./context/NewTodoContext";
import styles from "./styles/wrapper.module.scss";

function App() {
  const [todos, setTodos] = useState<
    { id: string; content: string; done: boolean }[]
  >([]);

  function deletedTodo(deletedTodo: {
    id: string;
    content: string;
    done: boolean;
  }) {
    const todoListWithoutDeletedOne = todos.filter(
      (todo) => todo !== deletedTodo
    );
    setTodos(todoListWithoutDeletedOne);
  }

  return (
    <div className="App">
      <Header />

      <NewTodoContextProvider>
        <main className={styles.wrapper}>
          <AddNewTodo setTodos={setTodos} />
          <TodosCount />
          {/* <WithoutTodos /> */}
          {todos.map((todo) => {
            return (
              <Todos
                key={todo.id}
                todo={todo}
                content={todo.content}
                deletedTodo={deletedTodo}
              />
            );
          })}
        </main>
      </NewTodoContextProvider>
    </div>
  );
}

export default App;
