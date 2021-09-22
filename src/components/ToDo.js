import React from "react";

function ToDo({ text, id }) {
  return (
    <li>
      {text}
      <button>Delete</button>
    </li>
  );
}

export default ToDo;
