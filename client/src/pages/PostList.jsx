import { Form, Link, useLoaderData } from "react-router-dom";
import PostCard from "../components/PostCard";
import { getPosts } from "../api/posts";
import { getUsers } from "../api/users";
import { useEffect, useRef } from "react";

function PostList() {
  const {
    users,
    posts,
    searchParams: { query },
  } = useLoaderData();
  const queryRef = useRef();

  useEffect(() => {
    queryRef.current.value = query;
  }, [query]);

  return (
    <>
      <h1 className="page-title">
        Posts
        <div className="title-btns">
          <Link className="btn btn-outline" to="new">
            New
          </Link>
        </div>
      </h1>
      <Form className="form mb-4">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="query">Query</label>
            <input type="search" name="query" id="query" ref={queryRef} />
          </div>
          {/* <div className="form-group">
            <label htmlFor="userId">Author</label>
            <select type="search" name="userId" id="userId">
              <option value="">Any</option>
              {users.map((user) => {
                <option value={user.id} key={user.id}>
                  {user.name}
                </option>;
              })}
            </select>
          </div> */}
          <button className="btn">Filter</button>
        </div>
      </Form>
      <div className="card-grid">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </>
  );
}

async function loader({ request: { signal, url } }) {
  const searchParams = new URL(url).searchParams;
  const query = searchParams.get("query") || "";
  const filterParams = { q: query };

  const posts = getPosts({ signal, params: filterParams });
  const users = getUsers({ signal });

  return {
    posts: await posts,
    users: await users,
    searchParams: { query },
  };
}

export const postListRoute = {
  loader,
  element: <PostList />,
};
