import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";

export function PostList() {
  const posts = useLoaderData();

  return (
    <>
      <div className="container">
        <h1 className="page-title">Posts</h1>
        <div className="card-grid">
          {posts.map((post) => (
            <div className="card" key={post.id}>
              <div className="card-header">{post.title}</div>
              <div className="card-body">
                <div className="card-preview-text">{post.body}</div>
              </div>
              <div className="card-footer">
                <Link to={post.id.toString()} className="btn">
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function loader({ request: { signal } }) {
  return axios
    .get("http://127.0.0.1:3000/posts", { signal })
    .then((res) => res.data);
}

export const postListRoute = {
  loader,
  element: <PostList />,
};
