function colorGenerator() {
  let randNum = Math.ceil(Math.random() * 180);
  let randNum2 = Math.ceil(Math.random() * 205);
  let randNum3 = Math.ceil(Math.random() * 225);
  return `rgba(${randNum},${randNum2},${randNum3},0.6)`;
}

const add = () => {
  let userInput = document.querySelector(".user-input").value;
  let newItem = document.createElement("li");
  let newText = document.createTextNode(userInput);
  newItem.appendChild(newText);
  document.querySelector(".list-item").appendChild(newItem);
  document.querySelector(".user-input").value = "";

  let list = document.querySelectorAll("li");
  list.forEach((listItem) => {
    listItem.style.backgroundColor = colorGenerator();
    listItem.style.listStyle = "none";
    listItem.style.color = "#fff";
  });
};
