import React from "react";
import Comments from "./Comments";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

function Post() {
  const post = useLoaderData();
  return (
    <>
      <div className="container">
        <h1 className="page-title">{post.title}</h1>
        <span className="page-subtitle">
          By: <a href="user.html"></a>
        </span>
        <div>{post.body}</div>
        <Comments />
      </div>
    </>
  );
}

export function loader({ params, request: { signal } }) {
  return axios
    .get(`http://127.0.0.1:3000/posts/${params.postID}`, { signal })
    .then((res) => res.data);
}

export const postRoute = {
  loader,
  element: <Post />,
};
