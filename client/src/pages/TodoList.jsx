import axios from "axios";
import { useLoaderData } from "react-router-dom";

function TodoList() {
  const todos = useLoaderData();
  return (
    <div className="container">
      <h1 className="page-title">Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed === true && "strike-through"}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
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
