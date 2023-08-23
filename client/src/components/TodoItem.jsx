import React from "react";

function TodoItem({ id, completed, title }) {
  return (
    <li key={id} className={completed === true ? "strike-through" : ""}>
      {title}
    </li>
  );
}

export default TodoItem;
