export class Button extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const text = this.dataset.text;
        const color = this.dataset.color || '';
        const border = this.dataset.border || '';

        this.innerHTML = `
        <button type="" class="${color} ${border} rounded-full text-sm px-5 py-2.5 mt-4 text-center">
            ${text}
        </button>
        `
    }
}

customElements.define('button-component', Button);

// bg-blue-500 hover:bg-blue-400 
// border border-blue-500