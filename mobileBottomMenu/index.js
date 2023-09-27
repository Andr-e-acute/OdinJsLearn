const indicator = document.querySelector("#indicator");
document.addEventListener("click", (e) => {
  let anchor;
  if (e.target.matches("a")) {
    anchor = e.target;
  } else {
    anchor = e.target.closest("a");
  }
  if (anchor != null) {
    const allAnchors = [...document.querySelectorAll("a")];
    const index = allAnchors.indexOf(anchor);
    indicator.style.setProperty("--position", index);

    document.querySelectorAll("a").forEach((element) => {
      element.classList.remove("active");
    });
    anchor.classList.add("active");
  }
});
