var emailInputSignIn = document.getElementById("emailInputSignIn");
var passwordInputSignIn = document.getElementById("passwordInputSignIn");
var btnSignIn = document.getElementById("btnSignIn");

var accounts = JSON.parse(localStorage.getItem("accountList")) || [];

btnSignIn.addEventListener("click", function (e) {
  e.preventDefault(); // منع التحديث الافتراضي للصفحة

  var isAccountFound = false;

  for (var i = 0; i < accounts.length; i++) {
    if (
      accounts[i].email === emailInputSignIn.value.trim() &&
      accounts[i].password === passwordInputSignIn.value.trim()
    ) {
      isAccountFound = true;

      // تخزين بيانات المستخدم الحالي فقط
      localStorage.setItem("currentUser", JSON.stringify(accounts[i]));

      // رسالة نجاح باستخدام SweetAlert
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: `Welcome back, ${accounts[i].name}! Redirecting to home page...`,
        showConfirmButton: false,
        timer: 2000, // تأخير زمني قبل التوجيه
      }).then(() => {
        window.location.replace("home.html");
      });

      break;
    }
  }

  if (!isAccountFound) {
    // رسالة خطأ باستخدام SweetAlert
    Swal.fire({
      icon: "error",
      title: "Invalid Login",
      text: "Invalid email or password. Please try again.",
      confirmButtonText: "Try Again",
    });
  }
});
