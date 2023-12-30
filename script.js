var overlay = document.querySelector(".popup-overlay");
var box = document.querySelector(".popup-container");
var addbutton = document.getElementById("add=popup");
var closebtn = document.getElementById("deletion");
addbutton.addEventListener("click", function () {
  overlay.style.display = "block";
  box.style.display = "block";
});
closebtn.addEventListener("click", function (event) {
  event.preventDefault();
  overlay.style.display = "none";
  box.style.display = "none";
});

var container = document.querySelector(".container");
var addbook = document.getElementById("addition");
var booktitle = document.getElementById("bookname");
var author = document.getElementById("bookauthor");
var decp = document.getElementById("decsp");
const deletebutton=(event)=>{
event.target.parentElement.remove();
}

addbook.addEventListener("click", function (event) {
  event.preventDefault();
  var div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = `<h2>${booktitle.value}</h2>
<h3>${author.value}</h3>
<p>${decp.value}</p>
<button onclick="deletebutton(event)">Delete</button>`;
  container.append(div);
  overlay.style.display = "none";
  box.style.display = "none";
});
