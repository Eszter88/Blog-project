import { Navigate, createBrowserRouter } from "react-router-dom";
import { postListRoute } from "./pages/PostList";
import { UserListRoute } from "./pages/UserList";
import { postRoute } from "./pages/Post";
import { userRoute } from "./pages/User";
import { todosRoute } from "./pages/TodoList";
import RootLayout from "./layouts/RootLayout";

import Error404 from "./pages/Error404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <Error404 />,
        children: [
          { index: true, element: <Navigate to="/posts" /> },
          {
            path: "posts",
            children: [
              { index: true, ...postListRoute },
              {
                path: ":postID",
                ...postRoute,
              },
            ],
          },
          {
            path: "users",
            children: [
              { index: true, ...UserListRoute },
              {
                path: ":userId",
                ...userRoute,
              },
            ],
          },
          { path: "todos", ...todosRoute },
          { path: "*", element: <Error404 /> },
        ],
      },
    ],
  },
]);
