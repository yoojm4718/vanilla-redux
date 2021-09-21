const form = document.querySelector("form");
const input = form.querySelector("input");
const ul = document.querySelector("ul");

const createToDo = (toDo) => {
  const li = document.createElement("li");
  li.innerText = toDo;
  ul.append(li);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const toDo = input.value;
  input.value = "";
  createToDo(toDo);
};

form.addEventListener("submit", handleSubmit);
