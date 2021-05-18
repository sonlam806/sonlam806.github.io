const useCases = [
  { color: "#ca9a21", label: "food" },
  { color: "#618c7b", label: "home" },
  { color: "#0076d3", label: "fashion" },
  { color: "#407a57", label: "gardening" },
];

let useCaseTexts = document.querySelectorAll(".use-case");
let dots = document.querySelectorAll(".indicator-dot");
let galleries = document.querySelectorAll(".gallery");
let scrolldownBtn = document.querySelector(".scroll-down");

let activeIndex = 0;
var sliderInterval;

function initSlider(selectedIndex) {
  if (selectedIndex) {
    activeIndex = selectedIndex;
  }
  if (!selectedIndex) {
    activeIndex = 0;
  }
  // render first time
  dots.forEach((text) => text.classList.remove("active"));
  useCaseTexts.forEach((text) => text.classList.remove("active"));
  galleries.forEach((gallery) => gallery.classList.remove("active"));
  dots[activeIndex].classList.add("active");
  useCaseTexts[activeIndex].classList.add("active");
  galleries[activeIndex].classList.add("active");
  scrolldownBtn.style.backgroundColor = useCases[activeIndex].color;

  // change active status after every 8s
  sliderInterval = setInterval(() => {
    dots.forEach((text) => text.classList.remove("active"));
    useCaseTexts.forEach((text) => text.classList.remove("active"));
    galleries.forEach((gallery) => gallery.classList.remove("active"));

    if (activeIndex > 2) {
      activeIndex = -1;
    }

    dots[activeIndex + 1].classList.add("active");
    useCaseTexts[activeIndex + 1].classList.add("active");
    galleries[activeIndex + 1].classList.add("active");
    scrolldownBtn.style.backgroundColor = useCases[activeIndex + 1].color;
    activeIndex++;
  }, 8000);
}

initSlider(null);

for (let index = 0; index < dots.length; index++) {
  const element = dots[index];
  element.addEventListener("click", () => {
    return handleActiveSlide(index);
  });
}

function handleActiveSlide(selectedIndex) {
  activeIndex = selectedIndex;
  useCaseTexts.forEach((text) => text.classList.remove("active"));
  dots.forEach((text) => text.classList.remove("active"));
  galleries.forEach((gallery) => gallery.classList.remove("active"));

  setTimeout(() => {
    useCaseTexts[selectedIndex].classList.add("active");
  }, 100);
  dots[selectedIndex].classList.add("active");
  galleries[selectedIndex].classList.add("active");

  // clear old interval
  // clearInterval(sliderInterval);

  // re-initialize slider
  // initSlider(selectedIndex);
}

