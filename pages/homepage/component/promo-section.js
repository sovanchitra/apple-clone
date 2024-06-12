export class PromoSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const promoImage = this.getAttribute("promoImage")
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
        <div class="relative flex justify-center">
            <img class=" h-[600px] w-full object-cover object-center" src="${promoImage}" alt="">
            <div class="absolute flex flex-col items-center ${styles} ">
                ${textTitle ? `<p class="text-4xl font-medium">${textTitle}</p>` : ''}
                ${imageTitle ? `<img class="w-fit h-10 mb-4" src="${imageTitle}" alt="vision pro typo"/>` : ''}
                ${subtitle1 ? `<p class="text-2xl font-light tracking-wider">${subtitle1}</p>` : ''}
                ${subtitle2 ? `<p class="text-2xl font-light tracking-wider">${subtitle2}</p>` : ''}
                <div class="flex justify-center gap-4">
                    ${button1Text ? `<button-component data-text="${button1Text}" data-color="${button1Color}"></button-component>` : ''}
                    ${button2Text ? `<button-component data-text="${button2Text}" data-color="${button2Color}"></button-component>` : ''}
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('promo-section', PromoSection);