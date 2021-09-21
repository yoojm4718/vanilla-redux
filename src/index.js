import { createStore } from "redux";

const form = document.querySelector("form");
const input = form.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELELTE_TODO";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: action.id }];
    case DELETE_TODO:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

const addToDo = (text) => {
  store.dispatch({ type: ADD_TODO, text, id: Date.now() });
};

const deleteToDo = (event) => {
  const { id } = event.target.parentNode;
  store.dispatch({ type: DELETE_TODO, id: parseInt(id) });
};

const paintToDos = () => {
  ul.innerHTML = "";
  const toDos = store.getState();
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.addEventListener("click", deleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.append(li);
  });
};

store.subscribe(paintToDos);

const handleSubmit = (event) => {
  event.preventDefault();
  const toDo = input.value;
  input.value = "";
  addToDo(toDo);
};

form.addEventListener("submit", handleSubmit);
