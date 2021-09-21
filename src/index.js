import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

const PLUS = "PLUS";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  const { type } = action;
  switch (type) {
    case PLUS:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

onChange();
countStore.subscribe(onChange);

plus.addEventListener("click", () => countStore.dispatch({ type: PLUS }));
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));
