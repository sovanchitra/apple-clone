const sliders = document.querySelectorAll(".slider");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  sliders.forEach((slider) => {
    // add data-animated="true" to every `.scroller` on the page
    slider.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-Inward`
    const sliderInward = slider.querySelector(".slider-inward");
    const sliderContent = Array.from(sliderInward.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.slider-Inward`
    sliderContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      sliderInward.appendChild(duplicatedItem);
    });
  });
}
