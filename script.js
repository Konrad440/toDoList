const form = document.querySelector("form");
const inputEnetrText = document.querySelector(".enterText");
const inputFindText = document.querySelector(".findText");
const taskNumber = document.querySelector("h1 span");
const ul = document.querySelector("ul");
const liElements = document.getElementsByClassName("task");

const removeTask = (e) => {
  e.target.parentNode.remove();
  taskNumber.textContent = liElements.length;
};

const addTask = (e) => {
  e.preventDefault();
  const newTask = inputEnetrText.value.toLowerCase();
  if (newTask === "") return;
  const newLi = document.createElement("li");
  newLi.className = "task";
  newLi.innerHTML = newTask + " <button>Usuń zadanie</button>";
  ul.appendChild(newLi);
  taskNumber.textContent = liElements.length;
  newLi.querySelector("button").addEventListener("click", removeTask);
  inputEnetrText.value = "";
};

const findTask = (e) => {
  const lookingText = e.target.value.toLowerCase();
  let nodeLiElements = [...liElements];
  nodeLiElements = nodeLiElements.filter((item) =>
    item.textContent.includes(lookingText)
  );
  ul.textContent = "";
  nodeLiElements.forEach((li) => ul.appendChild(li));
};

inputFindText.addEventListener("input", findTask);

form.addEventListener("submit", addTask);
