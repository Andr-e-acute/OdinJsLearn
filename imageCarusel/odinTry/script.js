const imgTrack = document.querySelector(".img-Container");
const buttons = document.querySelectorAll(".carousel-butt");
const originalImages = [...imgTrack.children];
const navDots = createNavDots();
const slideTiming = 5000;
let interval;

// create navigationDots in the correct amount and return them
function createNavDots() {
  const navDotsContainer = document.querySelector(".navDots");
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

function nextImage(imgContainer, images) {
  imgContainer.append(images[0]);
  const selected = document.querySelector(".img-Container > .selected");
  const index = images.indexOf(selected);
  images[index].classList.remove("selected");
  images[index + 1].classList.add("selected");
  navDotIndicator();
}
function prevImage(imgContainer, images) {
  imgContainer.prepend(images[images.length - 1]);
  const selected = document.querySelector(".img-Container > .selected");
  const index = images.indexOf(selected);
  images[index].classList.remove("selected");
  images[index - 1].classList.add("selected");
  navDotIndicator();
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const imgTrack = document.querySelector(".img-Container");
    const images = [...imgTrack.children];
    if (button.classList.contains("prev")) {
      prevImage(imgTrack, images);
    }
    if (button.classList.contains("next")) {
      nextImage(imgTrack, images);
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
    const moveImage = dotIndex - actualImagesIndex;

    console.log(
      `dotIndex:${dotIndex} and the images has Indexof:${actualImagesIndex} moveImage ${moveImage} `
    );
    if (moveImage > 0) {
      console.log(`move ${moveImage} times to the right`);
      for (let i = 0; i < moveImage; i++) {
        const imgTrack = document.querySelector(".img-Container");
        const actualImages = [...imgTrack.children];
        nextImage(imgTrack, actualImages);
      }
    }
    if (moveImage < 0) {
      console.log(`move ${moveImage} times to the left`);

      for (let i = 0; i > moveImage; i--) {
        const imgTrack = document.querySelector(".img-Container");
        const actualImages = [...imgTrack.children];
        prevImage(imgTrack, actualImages);
      }
    }
  });
});
imgTrack.addEventListener("mouseover", () => clearInterval(interval));
imgTrack.addEventListener("mouseleave", slideInterval);

// first Load
prevImage(imgTrack, originalImages);
slideInterval();
