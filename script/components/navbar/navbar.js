export class NavBar extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = `
        <nav class="relative flex justify-center w-full h-10 text-black bg-gray-100">
            <div class="max-w-screen-lg w-full flex justify-between md:justify-evenly gap-8 py-2 px-3">
                <div class="flex w-[2%]">
                    <a href="/pages/homepage/homepage.html">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" id="apple-logo" class="w-5 h-5 md:w-4" viewBox="0 0 16 16">
                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
                        </svg>
                    </a>
                </div>
                <ul class="md:flex w-[92%] items-center justify-between font-light text-xs hidden">
                    <li class="group">
                        <button class="h-10"><a href="#">Store</a></button>
                        <div class="hidden group-hover:block absolute z-10 left-0 w-screen h-fit bg-gray-100 shadow-xl">
                            <div class="max-w-screen-lg flex mx-auto py-10">
                                    <div class="flex gap-20">
                                        <div>
                                            <p class="text-sm text-gray-500 pb-3">Shop</p>
                                            <ul class="text-xl font-semibold space-y-3">
                                                <li>Shop the Latest</li>
                                                <li>Mac</li>
                                                <li>iPad</li>
                                                <li>iPhone</li>
                                                <li>Apple Watch</li>
                                                <li>Apple Vision Pro</li>
                                                <li>Accessories</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p class="text-sm text-gray-500 pb-3">Quick Links</p>
                                            <ul class="text-sm font-medium space-y-3">
                                                <li>Find a Store</li>
                                                <li>Order Status</li>
                                                <li>Apple Trade In</li>
                                                <li>Financing</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p class="text-sm text-gray-500 pb-3">Shop Special Stores</p>
                                            <ul class="text-sm font-medium space-y-3">
                                                <li>Certified Refurbished</li>
                                                <li>Education</li>
                                                <li>Business</li>
                                                <li>Veterans and Military</li>
                                                <li>Goverment</li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </li>

                    <li><a href="#">Mac</a></li>
                    <li><a href="#">iPad</a></li>
                    <li><a href="#">iPhone</a></li>
                    <li><a href="#">Watch</a></li>
                    <li><a href="#">Vision</a></li>
                    <li><a href="#">AirPods</a></li>
                    <li><a href="#">TV & Home</a></li>
                    <li><a href="#">Entertainment</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="/pages/support/support.html">Support</a></li>
                </ul>

                <div class="flex w-24 md:w-[6%] items-center justify-between">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="black" id="search-icon" class="w-4 h-4 md:w-3.5" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="black" id="cart-icon" class="w-4 h-4 md:w-3.5" viewBox="0 0 16 16">
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                    </svg>
                    <div class="block md:hidden">
                        <div class="hamburger flex flex-col gap-1 cursor-pointer">
                            <div id="bar1" class="w-4 h-[1.3px] transition-transform bg-black"></div>
                            <div id="bar2" class="w-4 h-[1.3px] transition-transform bg-black"></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <div id="mobile-navbar" class="hidden z-20 md:hidden fixed top-9 w-screen h-screen bg-gray-100 text-2xl font-medium text-gray-800 px-12 pt-12">
        <div class="flex flex-col gap-4">
            <a href="#">Store</a>
            <a href="#">iPad</a>
            <a href="#">iPhone</a>
            <a href="#">Watch</a>
            <a href="#">Vision</a>
            <a href="#">TV & Home</a>
            <a href="#">Entertainment</a>
            <a href="#">Accessories</a>
            <a href="/pages/support/support.html">Support</a>
        </div>
        </div>
        `;

        this.querySelector(".hamburger").addEventListener("click", this.toggleMobileNavbar.bind(this));
    }
    toggleMobileNavbar() {
        const mobileNavbar = this.querySelector("#mobile-navbar");
        const barOne = this.querySelector("#bar1");
        const barTwo = this.querySelector("#bar2");
        const appleLogo = this.querySelector("#apple-logo");
        const searchIcon = this.querySelector("#search-icon");
        const cartIcon = this.querySelector("#cart-icon");
        let navbarVisible = mobileNavbar.classList.contains("hidden");

        if (navbarVisible) {
            mobileNavbar.classList.remove("hidden");
            barOne.classList.add("rotate-45", "translate-y-[3px]");
            barTwo.classList.add("-rotate-45", "-translate-y-[2px]");
            appleLogo.classList.add("opacity-0");
            searchIcon.classList.add("opacity-0");
            cartIcon.classList.add("opacity-0");
        } else {
            mobileNavbar.classList.add("hidden");
            barOne.classList.remove("rotate-45", "translate-y-[3px]");
            barTwo.classList.remove("-rotate-45", "-translate-y-[2px]");
            appleLogo.classList.remove("opacity-0");
            searchIcon.classList.remove("opacity-0");
            cartIcon.classList.remove("opacity-0");
        }
    }
} 


customElements.define("navbar-component", NavBar);









        // const itemContent = [
        //     {
        //         label1: "Shop",
        //         anchor1: "Shop the Latest",
        //         anchor2: "Mac",
        //         anchor3: "iPad",
        //         anchor4: "iPhone",
        //         anchor5: "Apple Watch",
        //         anchor6: "Apple Vision Pro",
        //         anchor7: "Accessories",
        //         anchor8: "",
        //         anchor9: "",
        //         anchor10: "",
        //         label2: "",
        //         label3: "",
        //         label4: "Quick Links",
        //         anchor1: "Find a Store",
        //         anchor2: "Order Status",
        //         anchor3: "Apple Trade In",
        //         anchor4: "Financing",
        //         anchor5: "",
        //         anchor6: "",
        //         label5: "Shop Special Stores",
        //         anchor1: "Certified Refurbished",
        //         anchor2: "Education",
        //         anchor3: "Business",
        //         anchor4: "Veterans and Military",
        //         anchor5: "Goverment",
        //         anchor6: "",
        //         anchor7: "",
        //         anchor8: "",
        //         anchor9: "",
        //     },
        //     {
        //         label1: "Shop",
        //         anchor1: "Shop the Latest",
        //         anchor2: "Mac",
        //         anchor3: "iPad",
        //         anchor4: "iPhone",
        //         anchor5: "Apple Watch",
        //         anchor6: "Apple Vision Pro",
        //         anchor7: "Accessories",
        //         anchor8: "",
        //         anchor9: "",
        //         anchor10: "",
        //         label2: "",
        //         label3: "",
        //         label4: "Quick Links",
        //         anchor1: "Find a Store",
        //         anchor2: "Order Status",
        //         anchor3: "Apple Trade In",
        //         anchor4: "Financing",
        //         anchor5: "",
        //         anchor6: "",
        //         label5: "Shop Special Stores",
        //         anchor1: "Certified Refurbished",
        //         anchor2: "Education",
        //         anchor3: "Business",
        //         anchor4: "Veterans and Military",
        //         anchor5: "Goverment",
        //         anchor6: "",
        //         anchor7: "",
        //         anchor8: "",
        //         anchor9: "",
        //     }
        // ]