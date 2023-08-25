import React from "react";
import { redirect, useActionData, useLoaderData } from "react-router-dom";
import { createPost } from "../api/posts";
import { getUsers } from "../api/users";
import PostForm from "../components/PostForm";

function PostNew() {
  const users = useLoaderData();

  return (
    <>
      <h1 className="page-title">New Post</h1>
      <PostForm users={users} />
    </>
  );
}

async function action({ request }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  const userId = formData.get("userId");
  const errors = {};

  if (title === "") return (errors.title = "Required");
  if (body === "") return (errors.body = "Required");

  if (Object.keys(errors).length) {
    return errors;
  }

  const post = await createPost(
    { title, body, userId },
    { signal: request.signal }
  );
  return redirect(`/posts/${post.id}`);
}

function loader({ request: { signal } }) {
  return getUsers({ signal });
}

export const newPostRoute = {
  loader,
  action,
  element: <PostNew />,
};
