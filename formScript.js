function validateForm(event) {
  event.preventDefault();
  var fname = document.forms["Form"]["fname"].value;
  var lname = document.forms["Form"]["lname"].value;
  var email = document.forms["Form"]["email"].value;
  var phone = document.forms["Form"]["phone"].value;
  var username = document.forms["Form"]["username"].value;
  var password = document.forms["Form"]["password"].value;
  var confirmPassword = document.forms["Form"]["confirmPassword"].value;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/;
  var errorMessage = "";
  const isValidEmail = emailRegex.test(email);
  const isValidPassword = passwordRegex.test(password);

  if (fname === "") {
    errorMessage += "First Name must be filled out\n";
  }

  if (lname === "") {
    errorMessage += "Last Name must be filled out\n";
  }
  if (username === "") {
    errorMessage += "Username must be filled out\n";
  } else {
    if (username.length < 6) {
      errorMessage += "Username must be at least 6 characters\n";
    }
  }
  if (password === "") {
    errorMessage += "Password must be filled out\n";
  } else {
    if (!isValidPassword) {
      errorMessage +=
        "Password must be at least 8 characters and must have at least 1 lower case, 1 upper case, 1 number, 1 special character, and no spaces. \n";
    }
  }
  if (confirmPassword !== password) {
    errorMessage += "Passwords don't match\n";
  }

  if (email === "") {
    errorMessage += "Email must be filled out\n";
  } else {
    if (!isValidEmail) {
      errorMessage += "Invalid email address\n";
    }
  }

  if (phone.length !== 10) {
    errorMessage += "Phone number must be 10 digits\n";
  }
  if (errorMessage !== "") {
    alert(errorMessage);
    return false;
  }
  console.log("Validation \nstarted");

  alert("Form submitted successfully");
  return true;
}
