import React from "react";
import { redirect, useLoaderData } from "react-router-dom";
import { getUsers } from "../api/users";
import { getPost, updatePost } from "../api/posts";
import PostForm from "../components/PostForm";

function PostEdit() {
  const { users, post } = useLoaderData();

  return (
    <>
      <h1 className="page-title">Edit Post</h1>
      <PostForm users={users} defaultValues={post} />
    </>
  );
}

async function loader({ request: { signal }, params: { postID } }) {
  const users = getUsers({ signal });
  const post = getPost(postID, { signal });

  return { users: await users, post: await post };
}

async function action({ request, params: { postID } }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  const userId = formData.get("userId");

  const updatedPost = await updatePost(
    postID,
    { title, body, userId },
    { signal: request.signal }
  );

  return redirect(`/posts/${updatedPost.id}`);
}

export const editPostRoute = {
  loader,
  action,
  element: <PostEdit />,
};
