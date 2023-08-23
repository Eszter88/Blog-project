import axios from "axios";
import { useLoaderData } from "react-router-dom";
import TodoItem from "../components/TodoItem";

function TodoList() {
  const todos = useLoaderData();
  return (
    <>
      <h1 className="page-title">Todos</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}

function loader({ request: { signal } }) {
  return axios
    .get("http://localhost:3000/todos", { signal })
    .then((res) => res.data);
}

export const todosRoute = {
  loader,
  element: <TodoList />,
};
