import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "store";

function ToDo({ text, id, onClick }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onClick}>Delete</button>
    </li>
  );
}

const mapStateToProps = (dispatch, ownProps) => {
  return { onClick: () => dispatch(remove(ownProps.id)) };
};

export default connect(null, mapStateToProps)(ToDo);
