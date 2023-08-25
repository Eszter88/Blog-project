import React from "react";
import { Form, Link } from "react-router-dom";
import FormGroup from "./FormGroup";

function PostForm({ users, defaultValues = {} }) {
  return (
    <Form method="post" className="form">
      <div className="form-row">
        <FormGroup>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={defaultValues.title}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="userId">Author</label>
          <select name="userId" id="userId" defaultValue={defaultValues.usedId}>
            {users.map((user) => (
              <option value={user.id} key={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </FormGroup>
      </div>
      <div className="form-row">
        <FormGroup>
          <label htmlFor="body">Body</label>
          <textarea
            name="body"
            id="body"
            defaultValue={defaultValues.body}
          ></textarea>
        </FormGroup>
      </div>
      <div className="form-row form-btn-row">
        <Link className="btn btn-outline" to="..">
          Cancel
        </Link>
        <button className="btn">Save</button>
      </div>
    </Form>
  );
}

export default PostForm;
