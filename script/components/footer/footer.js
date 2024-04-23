export class Footer extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = `
        <body class="flex flex-col items-center">
        <div class="max-w-screen-xl w-screen text-xs">
            <section class="grid grid-cols-5">
                <div>
                    <div class="flex flex-col space-y-2">
                        <p class="font-bold mt-6">Shop and learn</p>
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
                    <div class="flex flex-col space-y-2">
                        <p class="font-bold mt-6">Apple Wallet</p>
                        <a href="#">Wallet</a>
                        <a href="#">Apple Card</a>
                        <a href="#">Apple Pay</a>
                        <a href="#">Apple Cash</a>
                    </div>
                </div>      
                    
                <div>
                    <div class="flex flex-col space-y-2">
                        <p class="font-bold mt-6">Account</p>
                        <a href="#">Manage Your Apple ID</a>
                        <a href="#">Apple Store Account</a>
                        <a href="#">iCloud.com</a>
                    </div>
                    
                    <div class="flex flex-col space-y-2">
                        <p class="font-bold mt-8">Entertainment</p>
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
        
                <div class="flex flex-col space-y-2">
                    <p class="font-bold mt-6">Apple Store</p>
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
                    <div class="flex flex-col space-y-2">
                        <p class="font-bold mt-6">For Business</p>
                        <a href="#">Apple and Business</a>
                        <a href="#">Shop for Business</a>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <p class="font-bold mt-6">For Education</p>
                        <a href="#">Apple and Education</a>
                        <a href="#">Shop for K-12</a>
                        <a href="#">Shop for College</a>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <p class="font-bold mt-6">For Healthcare</p>
                        <a href="#">Apple in Healthcare</a>
                        <a href="#">Health on Apple Watch</a>
                        <a href="#">Health Records on iPhone</a>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <p class="font-bold mt-6">For Government</p>
                        <a href="#">Shop for Government</a>
                        <a href="#">Shop for Veterans and Military</a>
                    </div>
                </div>
        
                <div>
                    <div class="flex flex-col space-y-2">
                        <p class="font-bold mt-6">Apple Values</p>
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
    
            <footer class="font-light text-gray-400 mt-10">
                <div>
                    More ways to shop: 
                    <a class="text-blue-500 underline" href="#">Find an Apple Store</a>
                    or
                    <a class="text-blue-500 underline" href="#">other retailer</a>
                    near you. Or call 1-800-MY-APPLE.
                </div>
                <hr class="my-5  border-gray-390">
                <div class="flex justify-between">
                    <div class="flex">
                        <p class="pr-10">Copyright © 2024 Apple Inc. All rights reserved.</p>
                        <div class="text-black">
                            <a class="px-2" href="#">Privacy Policy</a>|
                            <a class="px-2" href="#">Terms and Use</a>|
                            <a class="px-2" href="#">Sales and Refunds</a>|
                            <a class="px-2" href="#">Legal</a>|
                            <a class="px-2" href="#">Site Map</a>
                        </div>
                    </div>
                    <p class="text-black">United States</p>
                </div>
                
            </footer>
        </div>
    
    
    </body>
        `
    }
}

customElements.define("footer-component", Footer);