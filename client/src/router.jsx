import { Navigate, createBrowserRouter } from "react-router-dom";
import { postListRoute } from "./pages/PostList";
import { UserListRoute } from "./pages/UserList";
import { postRoute } from "./pages/Post";
import { userRoute } from "./pages/User";
import TodoList from "./pages/TodoList";
import RootLayout from "./layouts/RootLayout";
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
              { index: true, ...postRoute },
              { path: "comments", element: <Comments /> },
            ],
          },
        ],
      },
      {
        path: "users",
        children: [
          { index: true, ...UserListRoute },
          {
            path: ":userID",
            children: [{ index: true, ...userRoute }],
          },
        ],
      },
      { path: "todos", element: <TodoList /> },
    ],
  },
]);
