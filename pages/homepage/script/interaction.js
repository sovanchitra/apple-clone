// first Carousel
// First Carousel Content
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
const carouselOneButtons = document.getElementById("carousel-one-buttons");

// Populate carousel items
carouselOneItems.innerHTML = carouselOneContent
  .map(
    (item) => `
    <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="${item}" class="absolute block w-full -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2 5 max-w-[800px]" alt="">
    </div>
`
  )
  .join("");

// Populate carousel buttons
carouselOneButtons.innerHTML = carouselOneContent
  .map(
    (item, index) => `
      <button
        type="button"
        class="h-2 w-2 rounded-full ${index === 0 ? 'bg-gray-800' : 'bg-gray-400'}"
        aria-current="${index === 0 ? 'true' : 'false'}"
        aria-label="Slide ${index + 1}"
        data-carousel-slide-to="${index}"
      ></button>
    `
  )
  .join("");



// second carousel
// Second Carousel Content
const carouselTwoContent = [
  {
    imgSrc: "../../assets/images/homepage/ca-exercise.jpg",
    title: "Yoga with Molly",
    iconSrc: "../../assets/images/homepage/fitness-white.png",
  },
  {
    imgSrc: "../../assets/images/homepage/ca-sport.jpg",
    title: "HIIT with Bakari",
    iconSrc: "../../assets/images/homepage/arcade-white.png",
  },
  {
    imgSrc: "../../assets/images/homepage/ca-country.jpg",
    title: "Today's Country",
    iconSrc: "../../assets/images/homepage/music-black.png",
    isFlex: true,
  },
  {
    imgSrc: "../../assets/images/homepage/ca-animation.jpg",
    title: "Hello Kitty Island Adventure",
    iconSrc: "../../assets/images/homepage/fitness-white.png",
  },
  {
    imgSrc: "../../assets/images/homepage/ca-game.jpg",
    title: "Hello Kitty Island Adventure",
    iconSrc: "../../assets/images/homepage/arcade-white.png",
  },
  {
    imgSrc: "../../assets/images/homepage/ca-singer.jpg",
    title: "R&B Now",
    iconSrc: "../../assets/images/homepage/music-black.png",
    isFlex: true,
  },
];

const carouselTwoItems = document.getElementById("carousel-two-items");

// Populate the second carousel items
carouselTwoItems.innerHTML = carouselTwoContent
  .map(
    (item) => `
    <div class="relative ${item.isFlex ? 'flex w-96 items-center bg-stone-200' : 'max-w-96'}">
      <img class="${item.isFlex ? 'ml-3 max-w-48 rounded-xl shadow-md' : 'max-w-96'}" src="${item.imgSrc}" alt="${item.title}" />
      ${item.isFlex ? `
        <span class="px-5">${item.title}</span>
        <img class="absolute bottom-5 right-5 h-fit w-16" src="${item.iconSrc}" alt="" />
      ` : `
        <div class="absolute bottom-0 flex w-full justify-between px-3 pb-4 text-white">
          <span>${item.title}</span>
          <img class="h-fit w-20 pt-1" src="${item.iconSrc}" alt="" />
        </div>
      `}
    </div>`
  )
  .join("");

const sliders = document.querySelectorAll(".slider");

// Add animation if reduced motion is not preferred
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

// Function to add animation to sliders
function addAnimation() {
  sliders.forEach((slider) => {
    slider.setAttribute("data-animated", true);

    const sliderInward = slider.querySelector(".slider-inward");
    const sliderContent = Array.from(sliderInward.children);

     // Duplicate each item to create an infinite scroll effect
    sliderContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      sliderInward.appendChild(duplicatedItem);
    });
  });
}
