export class Footer extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = `
        <footer class="flex justify-center px-3 mb-3">
            <div class="max-w-screen-lg w-screen text-xs text-gray-800 hidden md:block px-3">
                <section class="grid grid-cols-5 font-light gap-10">
                    <div>
                        <div class="flex flex-col gap-2">
                            <p class="font-semibold mt-6">Shop and learn</p>
                            <a href="#">Store</a>
                            <a href="#">Mac</a>
                            <a href="#">iPad</a>
                            <a href="#">iPhone</a>
                            <a href="#">Watch</a>
                            <a href="#">Vision</a>
                            <a href="#">AirPods</a>
                            <a href="#">TV & Home</a>
                            <a href="#">AirTag</a>
                            <a href="#">Accessories</a>
                            <a href="#">Gift Cards</a>
                            
                        </div>
                        <div class="flex flex-col gap-2">
                            <p class="font-semibold mt-6">Apple Wallet</p>
                            <a href="#">Wallet</a>
                            <a href="#">Apple Card</a>
                            <a href="#">Apple Pay</a>
                            <a href="#">Apple Cash</a>
                        </div>
                    </div>      
                        
                    <div>
                        <div class="flex flex-col gap-2">
                            <p class="font-semibold mt-6">Account</p>
                            <a href="#">Manage Your Apple ID</a>
                            <a href="../../../pages/apple-account/apple-account.html">Apple Store Account</a>
                            <a href="#">iCloud.com</a>
                        </div>
                        
                        <div class="flex flex-col gap-2">
                            <p class="font-semibold mt-8">Entertainment</p>
                            <a href="#">Apple One</a>
                            <a href="#">Apple TV+</a>
                            <a href="#">Apple Music</a>
                            <a href="#">Apple Arcade</a>
                            <a href="#">Apple Fitness+</a>
                            <a href="#">Apple News+</a>
                            <a href="#">Apple Podcasts</a>
                            <a href="#">Apple Books</a>
                            <a href="#">App Store</a>
                        </div>
                    </div>
            
                    <div class="flex flex-col gap-2">
                        <p class="font-semibold mt-6">Apple Store</p>
                        <a href="#">Find a Store</a>
                        <a href="#">Genius Bar</a>
                        <a href="#">Today at Apple</a>
                        <a href="#">Apple Camp</a>
                        <a href="#">Apple Store App</a>
                        <a href="#">Certified Deals at Apple</a>
                        <a href="#">Apple Trade In</a>
                        <a href="#">Financing</a>
                        <a href="#">Carrier Deals at Apple</a>
                        <a href="#">Order Status</a>
                        <a href="#">Shopping help</a>
                    </div>
                    
                    <div>
                        <div class="flex flex-col gap-2">
                            <p class="font-semibold mt-6">For Business</p>
                            <a href="#">Apple and Business</a>
                            <a href="#">Shop for Business</a>
                        </div>
                        <div class="flex flex-col gap-2">
                            <p class="font-semibold mt-6">For Education</p>
                            <a href="#">Apple and Education</a>
                            <a href="#">Shop for K-12</a>
                            <a href="#">Shop for College</a>
                        </div>
                        <div class="flex flex-col gap-2">
                            <p class="font-semibold mt-6">For Healthcare</p>
                            <a href="#">Apple in Healthcare</a>
                            <a href="#">Health on Apple Watch</a>
                            <a href="#">Health Records on iPhone</a>
                        </div>
                        <div class="flex flex-col gap-2">
                            <p class="font-semibold mt-6">For Government</p>
                            <a href="#">Shop for Government</a>
                            <a href="#">Shop for Veterans and Military</a>
                        </div>
                    </div>
            
                    <div>
                        <div class="flex flex-col gap-2">
                            <p class="font-semibold mt-6">Apple Values</p>
                            <a href="#">Accessibility</a>
                            <a href="#">Education</a>
                            <a href="#">Environment</a>
                            <a href="#">Inclusion and Diversity</a>
                            <a href="#">Privacy</a>
                            <a href="#">Racial Equity and Justice</a>
                            <a href="#">Supplier Responsibility</a>
                        </div>
                        <div></div>
                    </div>
            
                </section>
        
                <section class="font-light text-gray-500 mt-5">
                    <div>
                        More ways to shop: 
                        <a class="text-blue-500 underline" href="#">Find an Apple Store</a>
                        or
                        <a class="text-blue-500 underline" href="#">other retailer</a>
                        near you. Or call 1-800-MY-APPLE.
                    </div>
                    <hr class="my-4  border-gray-300">
                    <div class="flex justify-between">
                        <div class="flex">
                            <p class="pr-10">Copyright © 2024 Apple Inc. All rights reserved.</p>
                            <div class="text-gray-700">
                                <a class="px-2" href="#">Privacy Policy</a>|
                                <a class="px-2" href="#">Terms and Use</a>|
                                <a class="px-2" href="#">Sales and Refunds</a>|
                                <a class="px-2" href="#">Legal</a>|
                                <a class="px-2" href="#">Site Map</a>
                            </div>
                        </div>
                        <p class="text-gray-700">United States</p>
                    </div>
                    
                </section>
            </div>

            <div class="max-w-screen-lg w-full text-xs text-gray-800 md:hidden">
                <section class="w-full flex flex-col gap-y-2 mt-3">
                    <details class=" w-full flex flex-col gap-2">
                        <summary class="flex justify-between">
                            <p class="font-semibold">Shop and learn</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>    
                        </summary>
                        <a href="#">Store</a>
                        <a href="#">Mac</a>
                        <a href="#">iPad</a>
                        <a href="#">iPhone</a>
                        <a href="#">Watch</a>
                        <a href="#">Vision</a>
                        <a href="#">AirPods</a>
                        <a href="#">TV & Home</a>
                        <a href="#">AirTag</a>
                        <a href="#">Accessories</a>
                        <a href="#">Gift Cards</a>
                    </details>
                    <hr>
        
                    <details class="flex flex-col gap-2">
                        <summary class="flex justify-between">
                            <p class="font-semibold">Apple Wallet</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>    
                        </summary>
                        <a href="#">Wallet</a>
                        <a href="#">Apple Card</a>
                        <a href="#">Apple Pay</a>
                        <a href="#">Apple Cash</a>
                    </details>
                    <hr>
        
                    <details class="flex flex-col gap-2">
                        <summary class="flex justify-between">
                            <p class="font-semibold">Account</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>    
                        </summary>
                        <a href="#">Manage Your Apple ID</a>
                        <a href="#">Apple Store Account</a>
                        <a href="#">iCloud.com</a>
                    </details>
                    <hr>
        
                    <details class="flex flex-col gap-2">
                        <summary class="flex justify-between">
                            <p class="font-semibold">Entertainment</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>    
                        </summary>
                        <a href="#">Apple One</a>
                        <a href="#">Apple TV+</a>
                        <a href="#">Apple Music</a>
                        <a href="#">Apple Arcade</a>
                        <a href="#">Apple Fitness+</a>
                        <a href="#">Apple News+</a>
                        <a href="#">Apple Podcasts</a>
                        <a href="#">Apple Books</a>
                        <a href="#">App Store</a>
                    </details>
                    <hr>
        
                    <details class="flex flex-col gap-2">
                        <summary class="flex justify-between">
                            <p class="font-semibold">Apple Store</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>    
                        </summary>
                        <a href="#">Find a Store</a>
                        <a href="#">Genius Bar</a>
                        <a href="#">Today at Apple</a>
                        <a href="#">Apple Camp</a>
                        <a href="#">Apple Store App</a>
                        <a href="#">Certified Deals at Apple</a>
                        <a href="#">Apple Trade In</a>
                        <a href="#">Financing</a>
                        <a href="#">Carrier Deals at Apple</a>
                        <a href="#">Order Status</a>
                        <a href="#">Shopping help</a>
                    </details>
                    <hr>
        
                    <details class="flex flex-col gap-2">
                        <summary class="flex justify-between">
                            <p class="font-semibold">For Business</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>    
                        </summary>
                        <a href="#">Apple and Business</a>
                        <a href="#">Shop for Business</a>
                    </details>
                    <hr>
        
                    <details class="flex flex-col gap-2">
                        <summary class="flex justify-between">
                            <p class="font-semibold">For Education</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>    
                        </summary>
                        <a href="#">Apple and Education</a>
                        <a href="#">Shop for K-12</a>
                        <a href="#">Shop for College</a>
                    </details>
                    <hr>
        
                    <details class="flex flex-col gap-2">
                        <summary class="flex justify-between">
                            <p class="font-semibold">For Healthcare</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>    
                        </summary>
                        <a href="#">Apple in Healthcare</a>
                        <a href="#">Health on Apple Watch</a>
                        <a href="#">Health Records on iPhone</a>
                    </details>
                    <hr>
        
                    <details class="flex flex-col gap-2">
                        <summary class="flex justify-between">
                            <p class="font-semibold">For Government</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>    
                        </summary>
                        <a href="#">Shop for Government</a>
                        <a href="#">Shop for Veterans and Military</a>
                    </details>
                    <hr>
        
                    <details class="flex flex-col gap-2">
                        <summary class="flex justify-between">
                            <p class="font-semibold">Apple Values</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>    
                        </summary>
                        <a href="#">Accessibility</a>
                        <a href="#">Education</a>
                        <a href="#">Environment</a>
                        <a href="#">Inclusion and Diversity</a>
                        <a href="#">Privacy</a>
                        <a href="#">Racial Equity and Justice</a>
                        <a href="#">Supplier Responsibility</a>
                    </details>
                    <hr>
                </section>
        
                <section class="font-light text-gray-500 mt-5">
                    <div>
                        More ways to shop: 
                        <a class="text-blue-500 underline" href="#">Find an Apple Store</a>
                        or
                        <a class="text-blue-500 underline" href="#">other retailer</a>
                        near you. Or call 1-800-MY-APPLE.
                    </div>
                    <p class="py-5">United States</p>
                    <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
                    <div class="flex gap-2 py-2">
                        <a href="#">Privacy Policy</a>|
                        <a href="#">Terms and Use</a>|
                        <a href="#">Sales and Refunds</a>|
                        <a href="#">Legal</a>|
                        <a href="#">Site Map</a>
                    </div>
                </section>
            </div>
        </footer>
        `
    }
}

customElements.define("footer-component", Footer);