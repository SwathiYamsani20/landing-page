document
  .querySelector(".signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();

    let formIsValid = true;

    document
      .querySelectorAll(".error-message")
      .forEach((error) => error.remove());

    if (firstName === "") {
      showErrorMessage("first-name", "First name is required");
      formIsValid = false;
    }

    if (lastName === "") {
      showErrorMessage("last-name", "Last name is required");
      formIsValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
      showErrorMessage("email", "Email is required");
      formIsValid = false;
    } else if (!emailPattern.test(email)) {
      showErrorMessage("email", "Invalid email format");
      formIsValid = false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (phone === "") {
      showErrorMessage("phone", "Phone number is required");
      formIsValid = false;
    } else if (!phonePattern.test(phone)) {
      showErrorMessage("phone", "Invalid phone number. Must be 10 digits.");
      formIsValid = false;
    }

    if (password === "") {
      showErrorMessage("password", "Password is required");
      formIsValid = false;
    } else if (password.length < 6) {
      showErrorMessage(
        "password",
        "Password must be at least 6 characters long"
      );
      formIsValid = false;
    }

    if (formIsValid) {
      const formData = {
        first_name: firstName,
        last_name: lastName,
        phone_number: phone,
        email: email,
        password: password,
      };

      console.log(formData);
    }
  });

function showErrorMessage(inputId, message) {
  const inputField = document.getElementById(inputId);
  const errorMessage = document.createElement("div");
  errorMessage.classList.add("error-message");
  errorMessage.style.color = "red";
  errorMessage.textContent = message;
  inputField.parentElement.appendChild(errorMessage);
}
