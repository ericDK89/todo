import { useState } from "react";
import { AddNewTodo } from "./components/AddNewTodo";
import { Header } from "./components/Header";
import { Todos } from "./components/Todos";
import { TodosCount } from "./components/TodosCount";
import { WithoutTodos } from "./components/WithoutTodos";
import styles from "./styles/wrapper.module.scss";

export interface Todo {
  id: string;
  content: string;
  done: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todosDoneCount, setTodosDoneCount] = useState(0);

  function deletedTodo(deletedTodo: Todo) {
    const todoListWithoutDeletedOne = todos.filter(
      (todo) => todo !== deletedTodo
    );
    setTodos(todoListWithoutDeletedOne);
  }

  const todosQuantity = 0 + todos.length;

  const verifyIfTodoExists = todos.length === 0;

  return (
    <div className="App">
      <Header />

      <main className={styles.wrapper}>
        <AddNewTodo setTodos={setTodos} />
        <TodosCount
          todosQuantity={todosQuantity}
          todosDoneCount={todosDoneCount}
        />

        {verifyIfTodoExists ? (
          <WithoutTodos />
        ) : (
          todos.map((todo) => {
            return (
              <Todos
                key={todo.id}
                todo={todo}
                deletedTodo={deletedTodo}
                todos={todos}
                setTodosDoneCount={setTodosDoneCount}
              />
            );
          })
        )}
      </main>
    </div>
  );
}

export default App;
