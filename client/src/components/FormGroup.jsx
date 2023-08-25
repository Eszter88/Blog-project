import React from "react";
import { useActionData } from "react-router-dom";

function FormGroup({ children }) {
  const errors = useActionData();
  return <div className={`form-group ${errors && "error"}`}>{children}</div>;
}

export default FormGroup;
