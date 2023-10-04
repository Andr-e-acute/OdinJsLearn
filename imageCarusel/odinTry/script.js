const imgTrack = document.querySelector(".img-Container");
const buttons = document.querySelectorAll(".carousel-butt");

// but the last image first to the left
const originalImages = [...imgTrack.children];

// create navigationDots in the correct amount
function createNavDots() {
  const navDots = document.querySelector(".navDots");
  originalImages.forEach((image) => {
    const navDot = document.createElement("button");
    navDot.classList.add("navDot");
    navDots.appendChild(navDot);
  });
}

// on start
// start with the first image in html
imgTrack.prepend(originalImages[originalImages.length - 1]);
createNavDots();
// querySelector should select the first element
document.querySelector(".navDot").classList.add("active");

// imgTrack left right button eventlistener
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // is there a alternative live html collection or so?
    const imgTrack = document.querySelector(".img-Container");
    const images = [...imgTrack.children];

    // the selected image can maybe simplified is always 1 (second img)
    if (button.classList.contains("prev")) {
      imgTrack.prepend(images[images.length - 1]);
      const selected = document.querySelector(".img-Container > .selected");
      const index = images.indexOf(selected);
      images[index].classList.remove("selected");
      images[index - 1].classList.add("selected");
    }
    if (button.classList.contains("next")) {
      imgTrack.append(images[0]);
      const selected = document.querySelector(".img-Container > .selected");
      const index = images.indexOf(selected);
      images[index].classList.remove("selected");
      images[index + 1].classList.add("selected");
    }
    // move to the prev image

    // move to the next image

    //  I can use this for the indicator
    console.log(originalImages.indexOf(images[1]));
  });
});
