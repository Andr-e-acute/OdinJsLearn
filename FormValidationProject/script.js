const wrapper = document.querySelectorAll(".wrapper");

function createError(input) {
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
  if (input.id === "user-confirmPwd") {
    const password = document.querySelector("#user-password").value;
    console.log(password);
    if (password !== input.value) {
      console.log("not the same");
    }
  }
  return error;
}
function testInput(input, wrapper) {
  let valid = input.validity.valid;
  let error=""
  if (!input.dataset.untouched) {
    input.dataset.untouched = "true";
    input.addEventListener("input", () => {
      testInput(input, wrapper);
    });
  }
  if (valid) {
    wrapper.classList.remove("error");
    wrapper.querySelector(".error-field").innerHTML = "";
  } else if (!valid) {
    wrapper.classList.add("error");
    wrapper.querySelector(".error-field").innerHTML = createError(input);
  }
  //password confirm not the same
  if (input.id === "user-confirmPwd") {
    const password = document.querySelector("#user-password").value;

    if (password !== input.value) {
      wrapper.classList.add("error");
      wrapper.querySelector(".error-field").innerHTML = `${
        wrapper.querySelector(".error-field").innerHTML
      }
        not the same password`;
    }
  }
  //   test password
  if (input.id === "user-password") {
    let minPwd = "";
    const password = document.querySelector("#user-password").value;
    const specialReg = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const number = /\d/;
    if (password.length === 0) return;
    // contains special characaters
    else if (!specialReg.test(password)) {
      minPwd = `needs to contain a special character like:"${specialReg}"<br>`;
    }
    //contains a number
    else if (!number.test(password)) {
      minPwd += `needs to contain a number`;
    } else {
      wrapper.classList.remove("error");
      wrapper.querySelector(".error-field").innerHTML = "";
      return;
    }
    wrapper.classList.add("error");
    wrapper.querySelector(".error-field").innerHTML = `${
      wrapper.querySelector(".error-field").innerHTML
    }${minPwd}`;
  }

  console.log()
}

wrapper.forEach((container) => {
  const input = container.querySelector("input");
  input.addEventListener("blur", () => {
    testInput(input, container);
  });
});
