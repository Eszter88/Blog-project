import { createBrowserRouter } from "react-router-dom";
import PostList from "./pages/PostList";
import UserList from "./pages/UserList";
import TodoList from "./pages/TodoList";

import RootLayout from "./Layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/posts", element: <PostList /> },
      { path: "/users", element: <UserList /> },
      { path: "/todos", element: <TodoList /> },
    ],
  },
]);
