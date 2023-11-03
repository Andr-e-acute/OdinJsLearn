// Simple example
// const email = document.getElementById("mail");

// email.addEventListener("input", (event) => {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("I am expecting an email address!");
//   } else {
//     email.setCustomValidity("INPUT IS CORRECT");
//   }
// }):

// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.

const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {
  // Each time the user types something, we check if the
  // form fields are valid.
  if (email.validity.valid) {
    // in case there is an error message visible , if the field
    // is valid, we remove the error message.
    emailError.textContent = ""; //Reset the content of the message
    emailError.className = "error"; //Reset the visual state of the message
  } else {
    // If email is not valid show the Error
    showError();
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least${email.minLength} 
    characters. You entered${email.value.lenght}`;
  }
  emailError.className = "error active";
}
