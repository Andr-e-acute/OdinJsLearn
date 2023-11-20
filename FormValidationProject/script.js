const wrapper = document.querySelectorAll(".wrapper");
const form = document.querySelector("form");
function createValidityError(input) {
  let error = "";
  const label = document.querySelector(
    `label[for = "${input.id}"]`
  ).textContent;
  // input empty
  if (input.validity.valueMissing && input.id === "user-confirmPwd") {
    error = "should not be empty <br>";
  } else if (input.validity.valueMissing) {
    error = ` you need to enter a ${label} <br>`;
  }
  //type mismatch
  if (input.validity.typeMismatch) {
    error = `${error} needs to be an valid ${input.type} input <br>`;
  }
  //   pattern
  if (input.validity.patternMismatch && input.id === "user-zip") {
    error = `zip code should only contain numbers<br>`;
  }
  //   test minlenght
  if (input.validity.tooShort) {
    error = `needs to be at least ${input.minLength} long<br>`;
  }

  // confirm pwd the same

  return error;
}
function createPasswordError(input) {
  let error = "";
  //password confirm not the same
  if (input.id === "user-confirmPwd") {
    const password = document.querySelector("#user-password").value;
    if (password !== input.value) {
      error = `${error}not the same password`;
    }
  }

  //   test password
  if (
    input.id === "user-password" &&
    document.querySelector("#user-password").value.length !== 0
  ) {
    const password = document.querySelector("#user-password").value;
    const specialReg = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const number = /\d/;
    // contains special characaters
    if (!specialReg.test(password)) {
      error = `${error} needs to contain a special character like:"${specialReg}"<br>`;
    }
    //contains a number
    if (!number.test(password)) {
      console.log("contains no number");
      error = `${error} needs to contain a number<br>`;
    }
  }
  return error;
}
function testInput(input, wrapper) {
  let valid = input.validity.valid;
  let error = "";
  //   for the lazy error testing
  if (!input.dataset.untouched) {
    input.dataset.untouched = "true";
    input.addEventListener("input", () => {
      testInput(input, wrapper);
    });
  }
  if (valid) {
    error = "";
  } else if (!valid) {
    error = createValidityError(input);
  }
  // check password
  error = `${error}${createPasswordError(input)}`;

  if (error.length === 0) {
    wrapper.classList.remove("error");
    wrapper.querySelector(".error-field").innerHTML = error;
  } else {
    wrapper.querySelector(".error-field").innerHTML = error;
    wrapper.classList.add("error");
  }
  input.setCustomValidity(error.replace("<br>", ""));
}

wrapper.forEach((container) => {
  const input = container.querySelector("input");
  input.addEventListener("blur", () => {
    testInput(input, container);
  });
});
form.addEventListener("submit", (e) => {
  console.log("submitted");
  e.preventDefault();
  document.getElementById("succees").classList.remove("hidden");
});
