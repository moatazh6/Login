var emailInputSignup = document.getElementById("emailInputSignup");
var passwordInputSignup = document.getElementById("passwordInputSignup");
var nameInputSignup = document.getElementById("nameInputSignup");
var signUpBtn = document.getElementById("signUpBtn");

// Sign up
var accountList;
if (localStorage.getItem("accountList") == null) {
  accountList = [];
} else {
  accountList = JSON.parse(localStorage.getItem("accountList"));
}
function addacount() {
  if (
    validationInputs(nameInputSignup, "msgName") === true &&
    validationInputs(emailInputSignup, "msgEmail") === true &&
    validationInputs(passwordInputSignup, "msgPassword") === true
  ) {
    for (var i = 0; i < accountList.length; i++) {
      if (accountList[i].email === emailInputSignup.value.trim()) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "This email is already registered. Please try another email.",
        });
        return;
      } else if (accountList[i].name === nameInputSignup.value.trim()) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "This name is already registered. Please try another name.",
        });
        return;
      }
    }

    var account = {
      name: nameInputSignup.value.trim(),
      email: emailInputSignup.value.trim(),
      password: passwordInputSignup.value.trim(),
    };
    accountList.push(account);
    localStorage.setItem("accountList", JSON.stringify(accountList));
    console.log(accountList);
    clearAccount();
    emailInputSignup.classList.remove("is-valid");
    passwordInputSignup.classList.remove("is-valid");
    nameInputSignup.classList.remove("is-valid");
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Account created successfully! Redirecting to login page...",
      showConfirmButton: false,
      timer: 2000,
    }).then(() => {
      window.location.replace("index.html");
    });
  }
}
function clearAccount() {
  nameInputSignup.value = null;
  emailInputSignup.value = null;
  passwordInputSignup.value = null;
}

function validationInputs(element, msgId) {
  var text = element.value;

  var regex = {
    nameInputSignup: /^[A-Za-z][a-zA-Z '.-]*[A-Za-z][^-]$/i,
    emailInputSignup: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm,
    passwordInputSignup: /^[0-9]*[A-Za-z]*$/,
  };

  var msg = document.getElementById(msgId);

  if (regex[element.id]) {
    if (regex[element.id].test(text)) {
      element.classList.add("is-valid");
      element.classList.remove("is-invalid");
      msg.classList.add("d-none");
      return true;
    } else {
      element.classList.add("is-invalid");
      element.classList.remove("is-valid");
      msg.classList.remove("d-none");
      return false;
    }
  }
}
