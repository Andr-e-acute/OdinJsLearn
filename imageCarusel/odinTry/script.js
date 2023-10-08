const frame = document.querySelector(".frame");
const imgTrack = frame.querySelector(".img-Container");
const buttons = frame.querySelectorAll(".carousel-butt");
const originalImages = [...imgTrack.children];
const navDots = createNavDots();
const slideTiming = 5000;
let interval;

// create navigationDots in the correct amount and return them
function createNavDots() {
  const navDotsContainer = frame.querySelector(".navDots");
  originalImages.forEach((image) => {
    const navDot = document.createElement("button");
    navDot.classList.add("navDot");
    navDotsContainer.appendChild(navDot);
  });
  return navDotsContainer.querySelectorAll(".navDot");
}
// actualize navDot  Indicator
function navDotIndicator() {
  const actualImages = [...imgTrack.children];
  const actualImagesIndex = originalImages.indexOf(actualImages[1]);
  navDots.forEach((dot) => {
    if (dot.classList.contains("active")) {
      dot.classList.remove("active");
    }
  });
  navDots[actualImagesIndex].classList.add("active");
}
// move forward automatic
const slideInterval = () =>
  (interval = setInterval(() => {
    const imgTrack = document.querySelector(".img-Container");
    const images = [...imgTrack.children];
    nextImage(imgTrack, images);
  }, slideTiming));

function nextImage() {
  const imgContainer = document.querySelector(".img-Container");
  const images = [...imgTrack.children];
  imgContainer.append(images[0]);
  const selected = document.querySelector(".img-Container > .selected");
  const index = images.indexOf(selected);
  images[index].classList.remove("selected");
  images[index + 1].classList.add("selected");
  navDotIndicator();
}
function prevImage() {
  const imgContainer = document.querySelector(".img-Container");
  const images = [...imgTrack.children];
  imgContainer.prepend(images[images.length - 1]);
  const selected = document.querySelector(".img-Container > .selected");
  const index = images.indexOf(selected);
  images[index].classList.remove("selected");
  images[index - 1].classList.add("selected");
  navDotIndicator();
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("prev")) {
      prevImage();
    }
    if (button.classList.contains("next")) {
      nextImage();
    }
  });
});

// navDots Buttons
navDots.forEach((dotButt) => {
  dotButt.addEventListener("click", () => {
    const imgTrack = document.querySelector(".img-Container");
    const dotIndex = [...navDots].indexOf(dotButt);
    const actualImages = [...imgTrack.children];
    const actualImagesIndex = originalImages.indexOf(actualImages[1]);
    let moveImage = dotIndex - actualImagesIndex;

    if (moveImage > 0) {
      // first move should be instantly
      nextImage();
      moveImage--;

      if (moveImage > 0) {
        const multiMoveInterval = setInterval(function () {
          nextImage();
          moveImage--;
          console.log(moveImage);
          if (moveImage === 0) {
            clearInterval(multiMoveInterval);
          }
        }, 200);
      }
      // alternative for instant jump
      // console.log(`move ${moveImage} times to the right`);
      // for (let i = 0; i < moveImage; i++) {
      //   nextImage();
      // }
    }
    if (moveImage < 0) {
      // first move should be instantly
      prevImage();
      moveImage++;
      if (moveImage < 0) {
        const multiMoveInterval = setInterval(function () {
          prevImage();
          moveImage++;

          if (moveImage === 0) {
            clearInterval(multiMoveInterval);
          }
        }, 200);
      }
      // // alternative for instant jump
      // console.log(`move ${moveImage} times to the left`);
      // for (let i = 0; i > moveImage; i--) {
      //   prevImage();
      // }
    }
  });
});
frame.addEventListener("mouseover", () => clearInterval(interval));
frame.addEventListener("mouseleave", slideInterval);

// first Load

prevImage();
slideInterval();
