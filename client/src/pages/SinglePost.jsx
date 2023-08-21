import React from "react";
import { Link } from "react-router-dom";
import Comments from "./Comments";

function SinglePost() {
  return (
    <>
      <div class="container">
        <h1 class="page-title">
          sunt aut facere repellat provident occaecati excepturi optio
          reprehenderit
        </h1>
        <span class="page-subtitle">
          By: <a href="user.html">Leanne Graham</a>
        </span>
        <div>
          quia et suscipit suscipit recusandae consequuntur expedita et cum
          reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt
          rem eveniet architecto
        </div>
        <Comments />
      </div>
    </>
  );
}

export default SinglePost;
