var btnLogOut = document.querySelector("#btnLogOut");
var row = document.querySelector("#row");

btnLogOut.addEventListener("click", function () {
  localStorage.removeItem("currentUser");
  location.href = "index.html";
});

var currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {
  document.getElementById("row").innerText = `Welcome, ${currentUser.name}!`;
} else {
  window.location.replace("login.html");
}

function display() {
  var cartona = `<h5 class="card-title">Welcome, ${currentUser.name}</h5>`;
  row.innerHTML = cartona;
}

display();
