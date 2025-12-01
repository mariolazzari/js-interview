// Implement a click on todo item as fast as possible
// const lis = document.querySelectorAll(".item");
// lis.forEach(li =>
//   li.addEventListener("click", () => window.alert("click:" + li.innerText))
// );

const app = document.querySelector(".todo-app");
app.addEventListener("click", e => {
  if (e.target && e.target.classList.contains("item")) {
    window.alert("click: " + e.target.innerText);
  }
});
