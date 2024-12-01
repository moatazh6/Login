var emailInputSignIn = document.getElementById("emailInputSignIn");
var passwordInputSignIn = document.getElementById("passwordInputSignIn");
var btnSignIn = document.getElementById("btnSignIn");

var accounts = JSON.parse(localStorage.getItem("accountList")) || [];

btnSignIn.addEventListener("click", function (e) {
  e.preventDefault();

  var isAccountFound = false;

  for (var i = 0; i < accounts.length; i++) {
    if (
      accounts[i].email === emailInputSignIn.value.trim() &&
      accounts[i].password === passwordInputSignIn.value.trim()
    ) {
      isAccountFound = true;

      localStorage.setItem("currentUser", JSON.stringify(accounts[i]));

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: `Welcome back, ${accounts[i].name}! Redirecting to home page...`,
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        window.location.replace("home.html");
      });

      break;
    }
  }

  if (!isAccountFound) {
    Swal.fire({
      icon: "error",
      title: "Invalid Login",
      text: "Invalid email or password. Please try again.",
      confirmButtonText: "Try Again",
    });
  }
});
