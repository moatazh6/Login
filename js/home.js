var btnLogOut = document.querySelector("#btnLogOut");
var row = document.querySelector("#row");

btnLogOut.addEventListener("click", function () {
  localStorage.removeItem("loggedInUser");
  location.href = "index.html";
});

var currentAccount = JSON.parse(localStorage.getItem("accountList"));
function display() {
  cartona = "";
  for (var i = 0; i < currentAccount.length; i++) {
    cartona += `  <h5 class="card-title">Welcome, ${currentAccount[i].name}</h5>`;
  }
  row.innerHTML = cartona;
}

display();
