const email = document.getElementById("mail");
const errorField = document.querySelector("#error");
email.addEventListener("input", (event) => {
  console.log(event.target.validity);
  if (event.target.validity.typeMismatch) {
    email.setCustomValidity("typeMismatch");
    errorField.textContent = "typeMismatch";
  } else if (event.target.validity.tooShort) {
    email.setCustomValidity("too short");
    errorField.textContent = " too short";
  } else {
    email.setCustomValidity("");
    errorField.textContent = "allGood";
  }
});
