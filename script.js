document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get input values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let phone = document.getElementById("phone").value;

  let isValid = true;

  // Name validation
  if (name.length < 3) {
    document.getElementById("nameError").innerText =
      "Name must be at least 3 characters";
    isValid = false;
  } else {
    document.getElementById("nameError").innerText = "";
  }

  // Email validation
  if (!email.includes("@")) {
    document.getElementById("emailError").innerText =
      "Invalid email address";
    isValid = false;
  } else {
    document.getElementById("emailError").innerText = "";
  }

  // Password validation
  if (password.length < 6) {
    document.getElementById("passwordError").innerText =
      "Password must be at least 6 characters";
    isValid = false;
  } else {
    document.getElementById("passwordError").innerText = "";
  }

  // Confirm password validation
  if (password !== confirmPassword) {
    document.getElementById("confirmError").innerText =
      "Passwords do not match";
    isValid = false;
  } else {
    document.getElementById("confirmError").innerText = "";
  }

  // Phone validation
  if (phone.length !== 11) {
    document.getElementById("phoneError").innerText =
      "Phone number must be 11 digits";
    isValid = false;
  } else {
    document.getElementById("phoneError").innerText = "";
  }

  // Final check
  if (isValid) {
    alert("Form Submitted Successfully!");
  }
});
