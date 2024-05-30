// apple support
const productItemsData = [
  {
    image: "../../assets/images/support/image-grid-iphone_2x.png",
    text: "iPhone",
  },
  {
    image: "../../assets/images/support/image-grid-mac_2x.png",
    text: "Mac",
  },
  {
    image: "../../assets/images/support/image-grid-ipad_2x.png",
    text: "iPad",
  },
  {
    image: "../../assets/images/support/image-grid-watch-_2x.png",
    text: "Watch",
  },
  {
    image: "../../assets/images/support/image-grid-apple-vision-pro_2x.png",
    text: "Vision",
  },
  {
    image: "../../assets/images/support/image-grid-airpods_2x.png",
    text: "AirPods",
  },
  { image: "../../assets/images/support/image-grid-tv_2x.png", text: "TV" },
];

const productItems = document.getElementById("product-items");
productItems.innerHTML = productItemsData
  .map(
    (item) => `
    <div class="flex flex-col items-center gap-4">
        <img class="h-[70px] cursor-pointer" src="${item.image}" alt="">
        <p class="cursor-pointer">${item.text}</p>
    </div>
`
  )
  .join("");

const supportBoxData = [
  {
    image: "../../assets/images/support/tile-topic-password_2x.svg",
    text: "Forgot Apple ID password",
  },
  {
    image: "../../assets/images/support/tile-topic-repair_2x.svg",
    text: "Apple Repair",
  },
  {
    image: "../../assets/images/support/tile-topic-billing_2x.svg",
    text: "Billing and subscriptions",
  },
];

const supportBox = document.getElementById("support-box");
supportBox.innerHTML = supportBoxData
  .map(
    (item) => `
    <a href="#">
        <div class="flex flex-col justify-center gap-y-3 h-44 bg-gray-100 rounded-3xl">
            <img class="h-14" src="${item.image}" alt="">
            <p class="text-blue-500 hover:underline">${item.text}</p>
        </div> 
    </a>
`
  )
  .join("");

// search bar
const searchBar = document.getElementById("search-bar");
const placeHolder = document.getElementById("place-holder");
const dropdownContent = `
    <div id="search-dropdown" class="top-24 w-full px-5 lg:px-0">
        <div class="h-fit text-start text-sm border border-gray-300 rounded-b-2xl space-y-3 py-10">
            <span class="px-12 text-gray-600">Quick links</span>
            <div class="flex flex-col gap-3 px-16 font-medium">
                <p>If you forgot Apple ID password</p>
                <p>If you forgot the passcode for your iPhone, iPad, or iPod touch</p>
                <p>How to cancel a subscription from Apple</p>
                <p>Update iOS on your device</p>
                <p>Contact Apple Support</p>
            </div>
        </div>
    </div>
`;

let isDropdownVisible = false;

searchBar.addEventListener("click", (event) => {
  event.stopPropagation();
  if (!isDropdownVisible) {
    searchBar.insertAdjacentHTML("afterend", dropdownContent);
    isDropdownVisible = true;
    placeHolder.classList.remove("rounded-xl");
    placeHolder.classList.add("rounded-t-2xl");
  } else {
    closeDropdown();
  }
});

document.addEventListener("click", (event) => {
  if (!searchBar.contains(event.target)) {
    closeDropdown();
  }
});

function closeDropdown() {
  const dropdown = document.querySelector("#search-dropdown");
  if (dropdown) {
    dropdown.remove();
    isDropdownVisible = false;
    placeHolder.classList.add("rounded-xl");
    placeHolder.classList.remove("rounded-t-2xl");
  }
}
