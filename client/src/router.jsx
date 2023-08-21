import { Navigate, createBrowserRouter } from "react-router-dom";
import { postListRoute } from "./pages/PostList";
import UserList from "./pages/UserList";
import TodoList from "./pages/TodoList";
import RootLayout from "./layouts/RootLayout";
import SinglePost from "./pages/SinglePost";
import Comments from "./pages/Comments";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Navigate to="/posts" /> },
      {
        path: "posts",
        children: [
          { index: true, ...postListRoute },
          {
            path: ":postID",
            children: [
              { index: true, element: <SinglePost /> },
              { path: "comments", element: <Comments /> },
            ],
          },
        ],
      },
      { path: "users", element: <UserList /> },
      { path: "todos", element: <TodoList /> },
    ],
  },
]);
