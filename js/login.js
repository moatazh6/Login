var emailInputSignIn = document.getElementById("emailInputSignIn");
var passwordInputSignIn = document.getElementById("passwordInputSignIn");
var btnSignIn = document.getElementById("btnSignIn");

var accounts = JSON.parse(localStorage.getItem("accountList")) || [];
btnSignIn.addEventListener("click", function (e) {
  e.preventDefault(); //

  var isAccountFound = false;

  for (var i = 0; i < accounts.length; i++) {
    if (
      accounts[i].email === emailInputSignIn.value &&
      accounts[i].password === passwordInputSignIn.value
    ) {
      isAccountFound = true;
      localStorage.setItem("currentUser", JSON.stringify(accounts[i]));
      window.location.replace("home.html");
      break;
    }
  }
  if (!isAccountFound) {
    alert("Invalid email or password. Please try again.");
  }
});
