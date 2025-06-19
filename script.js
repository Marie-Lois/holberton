// const productContainers = [...document.querySelectorAll(".slider-container")];
// const nxtBtn = [...document.querySelectorAll(".next-btn")];
// const preBtn = [...document.querySelectorAll(".prev-btn")];

// console.log(productContainers);
// console.log(nxtBtn);
// console.log(preBtn);

// productContainers.forEach((item, i) => {
//   let containerDimensions = item.getBoundingClientRect();
//   let containerWidth = containerDimensions.width;

//   nxtBtn[i].addEventListener("click", () => {
//     item.scrollLeft += containerWidth;
//   });

//   preBtn[i].addEventListener("click", () => {
//     item.scrollLeft -= containerWidth;
//   });
// });

const carousel = document.querySelector(".section10 .container");
const sliderBtn = document.querySelectorAll(".slider-btn");
const firstCardWidth = carousel.querySelector(".section10A").offsetWidth;

sliderBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    sliderBtn.scrollLeft +=
      btn.id === "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragging = (e) => {
  //   console.log(e.pageX);

  carousel.scrollLeft = e.pageX;
};

carousel.addEventListener("mousemove", dragging);
