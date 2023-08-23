import { baseApi } from "./base";

export function getPosts(options) {
  return baseApi.get("posts", options).then((res) => res.data);
}

export function getPost(postID, options) {
  return baseApi.get(`posts/${postID}`, options).then((res) => res.data);
}
