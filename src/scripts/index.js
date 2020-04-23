function colorGenerator() {
  let randNum = Math.ceil(Math.random() * 230);
  let randNum2 = Math.ceil(Math.random() * 225);
  let randNum3 = Math.ceil(Math.random() * 220);
  return `rgba(${randNum},${randNum2},${randNum3},0.8)`;
}

const add = () => {
  let userInput = document.querySelector(".user-input").value;
  if (userInput == "") {
    return alert("Please enter something...");
  }

  let newItem = document.createElement("li");
  let newText = document.createTextNode(userInput);
  newItem.appendChild(newText);
  document.querySelector(".list-item").appendChild(newItem);
  document.querySelector(".user-input").value = "";

  let list = document.querySelectorAll("li");
  list.forEach(({ style: listItem }) => {
    listItem.backgroundColor = colorGenerator();
    listItem.listStyle = "none";
    listItem.color = "#fff";
    listItem.fontWeight = "700";
    listItem.textShadow = "0 0.1rem 0.3rem black";
    listItem.paddingLeft = ".8rem";
    listItem.borderRadius = "25px";
  });

  let span = document.createElement("span");
  let text = document.createElement("i");
  text.className = "fas fa-times-circle";
  span.className = "close";
  span.appendChild(text);
  list.forEach((item) => {
    item.appendChild(span);
  });

  span.addEventListener("click", () => {
    newItem.style.display = "none";
  });
};

document.addEventListener("keypress", (event) => {
  //check if the user pressed the return key (enter)
  if (event.keyCode === 13) {
    add();
  }
});
