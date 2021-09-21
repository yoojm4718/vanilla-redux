const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

let count = 0;

const updateText = () => {
  number.innerText = count;
};

const handlePlus = () => {
  count = count + 1;
  updateText();
};

const handleMinus = () => {
  count = count - 1;
  updateText();
};

updateText();

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);
