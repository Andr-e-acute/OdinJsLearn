const dropdowns = document.querySelectorAll(".dropdownBtn");

// close all open dropdown
function closeDropdowns() {
  const activeDropdowns = document.querySelectorAll(".dropdown.active");
  activeDropdowns.forEach((dropdown) => {
    dropdown.classList.remove("active");
  });
}

function toggleDropdown(event) {
  closeDropdowns();
  event.preventDefault();
  const dropdownList = this.querySelector(".dropdown");
  dropdownList.classList.toggle("active");
}
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", toggleDropdown);
});

// when window clicked close the dropdown
