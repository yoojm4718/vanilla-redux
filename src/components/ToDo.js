import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "store";

function ToDo({ text, onClick }) {
  return (
    <li>
      {text}
      <button onClick={onClick}>Delete</button>
    </li>
  );
}

const mapStateToProps = (dispatch, ownProps) => {
  return { onClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)) };
};

export default connect(null, mapStateToProps)(ToDo);
