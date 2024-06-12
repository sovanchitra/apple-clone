// apple support
// Apple support data
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

// Populate product items
const productItems = document.getElementById("product-items");
productItems.innerHTML = productItemsData
  .map(
    (item) => `
    <div class="flex flex-col items-center gap-4">
        <img class="h-[70px] cursor-pointer" src="${item.image}" alt="${item.image + "image"}">
        <p class="cursor-pointer">${item.text}</p>
    </div>
`,
  )
  .join("");

// Support Box Data
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

// Populate support box
const supportBox = document.getElementById("support-box");
supportBox.innerHTML = supportBoxData
  .map(
    (item) => `
    <a href="#">
        <div class="flex flex-col justify-center gap-y-3 h-44 bg-gray-100 rounded-3xl">
            <img class="h-14" src="${item.image}" alt="${item.image + "image"}">
            <p class="text-blue-500 hover:underline">${item.text}</p>
        </div> 
    </a>
  `,
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
                <a href="#">If you forgot Apple ID password</a>
                <a href="#">If you forgot the passcode for your iPhone, iPad, or iPod touch</a>
                <a href="#">How to cancel a subscription from Apple</a>
                <a href="#">Update iOS on your device</a>
                <a href="#">Contact Apple Support</a>
            </div>
        </div>
    </div>
`;

let isDropdownVisible = false;

// Toggle dropdown visibility on click
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

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
  if (!searchBar.contains(event.target)) {
    closeDropdown();
  }
});

// Function to close dropdown
function closeDropdown() {
  const dropdown = document.querySelector("#search-dropdown");
  if (dropdown) {
    dropdown.remove();
    isDropdownVisible = false;
    placeHolder.classList.add("rounded-xl");
    placeHolder.classList.remove("rounded-t-2xl");
  }
}
