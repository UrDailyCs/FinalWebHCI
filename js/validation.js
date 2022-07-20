var form = document.forms["contact-form"];

var names = form["form-name"];

var email = form["form-email"];
var gender = form["form-gender"];
var branch = form["branch"];
var feedback = form["feedback"];
var tos = form["tos"];

form.addEventListener("submit", function (e) {
  var error = false;

  if (names.value.length == 0) {
    alert("Name Cannot be Empty!");
    error = true;
  }

  if (checkEmail(email.value) == false && error == false) {
    alert("Email is invalid");
    error = true;
  }

  function checkEmail(email) {
    if (email[0] == "@") return false;

    if (!(email.endsWith("@gmail.com") || email.endsWith("@yahoo.com")))
      return false;

    if (email.indexOf("@") != email.lastIndexOf("@")) return false;
    if (email[email.indexOf("@") - 1] == ".") return false;

    return true;
  }
  if (gender.value == "" && error == false) {
    alert("Gender must be filled");
    error = true;
  }
  if (branch.value == "" && error == false) {
    alert("One branch must be choosed");
  }

  if (tos.checked == false && error == false) {
    alert("Terms of Service is not checked!");
    error = true;
  }
  if (feedback.value.length == 0 && error == false) {
    alert("Please give us Feedback :). Thanks");
    error = true;
  }
  if (error == true) e.preventDefault();
});
