/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
  event.stopPropagation();
  const dropdownList = this.querySelector(".dropdown");
  dropdownList.classList.toggle("active");
}

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", toggleDropdown);
});

// when window clicked close the dropdown
document.addEventListener("click", closeDropdowns);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcm9wZG93bl9tZW51Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRyb3Bkb3ducyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJvcGRvd25CdG5cIik7XHJcblxyXG4vLyBjbG9zZSBhbGwgb3BlbiBkcm9wZG93blxyXG5mdW5jdGlvbiBjbG9zZURyb3Bkb3ducygpIHtcclxuICBjb25zdCBhY3RpdmVEcm9wZG93bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyb3Bkb3duLmFjdGl2ZVwiKTtcclxuICBhY3RpdmVEcm9wZG93bnMuZm9yRWFjaCgoZHJvcGRvd24pID0+IHtcclxuICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZURyb3Bkb3duKGV2ZW50KSB7XHJcbiAgY2xvc2VEcm9wZG93bnMoKTtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIGNvbnN0IGRyb3Bkb3duTGlzdCA9IHRoaXMucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93blwiKTtcclxuICBkcm9wZG93bkxpc3QuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxufVxyXG5cclxuZHJvcGRvd25zLmZvckVhY2goKGRyb3Bkb3duKSA9PiB7XHJcbiAgZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZURyb3Bkb3duKTtcclxufSk7XHJcblxyXG4vLyB3aGVuIHdpbmRvdyBjbGlja2VkIGNsb3NlIHRoZSBkcm9wZG93blxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VEcm9wZG93bnMpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=