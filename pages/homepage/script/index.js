// first Carousel
const carouselOneContent = [
  "../../assets/images/homepage/1960x1102 copy.jpg",
  "../../assets/images/homepage/homepage (12).jpg",
  "../../assets/images/homepage/homepage (27).jpg",
  "../../assets/images/homepage/1960x1102 (1).jpg",
  "../../assets/images/homepage/1960x1102 (2).jpg",
  "../../assets/images/homepage/homepage (11).jpg",
  "../../assets/images/homepage/1960x1102.jpg",
  "../../assets/images/homepage/homepage (15).jpg",
  "../../assets/images/homepage/homepage (14).jpg",
  "../../assets/images/homepage/1960x1102 (3).jpg",
];

const carouselOneItems = document.getElementById("carousel-one-items");
carouselOneItems.innerHTML = carouselOneContent
  .map(
    (item) => `
    <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="${item}" class="absolute block w-full -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2 5 max-w-[800px]" alt="">
    </div>
`
  )
  .join("");

// second carousel
const sliders = document.querySelectorAll(".slider");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  sliders.forEach((slider) => {
    slider.setAttribute("data-animated", true);

    const sliderInward = slider.querySelector(".slider-inward");
    const sliderContent = Array.from(sliderInward.children);

    sliderContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      sliderInward.appendChild(duplicatedItem);
    });
  });
}
