export class HeroSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const heroImage = this.getAttribute("heroImage")
        const heroImgS = this.getAttribute("heroImgS")
        const textTitle = this.getAttribute("textTitle")
        const subtitle1 = this.getAttribute("subtitle1")
        const subtitle2 = this.getAttribute("subtitle2")
        const imageTitle = this.getAttribute("imageTitle")
        const button1Text = this.getAttribute("button1Text")
        const button1Color = this.getAttribute("button1Color")
        const button2Text = this.getAttribute("button2Text")
        const button2Color = this.getAttribute("button2Color")
        const styles = this.getAttribute("styles")

        
        this.innerHTML = `
        <div class="relative flex justify-center pb-4">
            <img class="h-[660px] w-full object-cover object-center" src="${heroImage}" alt="">
            <div class="absolute flex flex-col items-center ${styles} ">
                ${textTitle ? `<p class="text-6xl pb-3 font-semibold">${textTitle}</p>` : ''}
                ${imageTitle ? `<img class="w-fit h-14" src="${imageTitle}" alt="vision pro typo"/>` : ''}
                ${subtitle1 ? `<p class="text-2xl font-light">${subtitle1}</p>` : ''}
                ${subtitle2 ? `<p class="text-2xl font-light">${subtitle2}</p>` : ''}
                <div class="flex justify-center gap-4">
                    ${button1Text ? `<button-component data-text="${button1Text}" data-color="${button1Color}"></button-component>` : ''}
                    ${button2Text ? `<button-component data-text="${button2Text}" data-color="${button2Color}"></button-component>` : ''}
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('hero-section', HeroSection);

// ${textTitle ? `<p class="mb-4 text-6xl font-semibold">${textTitle}</p>` : ''}