const dropdowns = document.querySelectorAll(".dropdownBtn");

// close all open dropdown
function closeDropdowns() {
  const activeDropdowns = document.querySelectorAll(".dropdown.active");
  activeDropdowns.forEach((dropdown) => {
    dropdown.classList.remove("active");
  });
}

function toggleDropdown(event) {
  event.stopPropagation();
  const newDropdown = this.querySelector(".dropdown");
  newDropdown.classList.toggle("active");

  // close the other open dropdowns
  const activeDropdowns = document.querySelectorAll(".dropdown.active");
  activeDropdowns.forEach((dropdown) => {
    if (dropdown !== newDropdown) {
      dropdown.classList.remove("active");
    }
  });
}

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", toggleDropdown);
});

// when window clicked close all the dropdowns
document.addEventListener("click", closeDropdowns);
