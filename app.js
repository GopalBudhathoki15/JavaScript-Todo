document.querySelector("#btn1").onclick = addTodo;

//add todo
function addTodo() {
  const todo = document.querySelector("input").value;
  if (todo !== "") {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = "Remove";
    btn.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
    li.innerHTML = todo;
    li.addEventListener("click", (e) => {
      e.target.classList.toggle("completed");
    });
    li.appendChild(btn);
    const div = document.querySelector("div");
    if (document.querySelector("h2")) {
      div.removeChild(document.querySelector("h2"));
    }
    if (!div.querySelector("ul")) {
      const ul = document.createElement("ul");
      div.append(ul);
    }
    document.querySelector("ul").append(li);
  }
  document.querySelector("input").value = "";
}

const li = document.querySelector("li");

if (li.innerHTML == "") {
  document.querySelector("div").removeChild(document.querySelector("ul"));
  h2 = document.createElement("h2");
  h2.innerHTML = "No Todo";
  document.querySelector("div").appendChild(h2);
}

// Removing Todo
// document.addEventListener("click", (e) => {
//   if (e.target.tagName === "BUTTON") {
//     e.target.parentElement.remove();
//   }
// });
