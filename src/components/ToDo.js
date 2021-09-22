import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "store";

function ToDo({ text, id, onClick }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onClick}>Delete</button>
    </li>
  );
}

const mapStateToProps = (dispatch, ownProps) => {
  return { onClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)) };
};

export default connect(null, mapStateToProps)(ToDo);
