var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");
var phone = document.getElementById("phone");
var date = document.getElementById("date");

var usernameError = document.getElementById("nameError");
var passwordError = document.getElementById("passwordError");
var emailError = document.getElementById("emailError");
var phoneError = document.getElementById("phoneError");
var dateError = document.getElementById("dateError");
var password2Error = document.getElementById("password2Error");
var submitBtn = document.getElementById("btn");

function isValidEmail(email) {
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}

submitBtn.addEventListener("click", function (event) {
  usernameError.innerText = "";
  passwordError.innerText = "";
  emailError.innerText = "";
  phoneError.innerText = "";

  if (username.value === "") {
    usernameError.innerText = "Name is required";
  }

  if (password.value.length < 8) {
    passwordError.innerText = "Password must be at least 8 characters";
  }

  if(password.value.length === password2.value.length){
    password2Error.innerText= "";
}
else{
    password2Error.innerText="worng password"
}

  if (!isValidEmail(email.value)) {
    emailError.innerText = "This is not a valid email";
}

  if (phone.value.length < 11) {
    phoneError.innerText = "Phone number must be 11 digits";
  }
  
    if(date.value === ''){
        dateError.innerText = "Date is required";
            }
});