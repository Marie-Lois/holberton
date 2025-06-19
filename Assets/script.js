const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide-image");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

function updateSliderPosition() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSliderPosition();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
});
