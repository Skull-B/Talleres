export default class Display {
    constructor() {
        this.displayElement = document.createElement('div');
        this.displayElement.className = 'display';
    }

    render(value = '0') {
        this.displayElement.textContent = value;
        return this.displayElement;
    }

    update(value) {
        this.displayElement.textContent = value;
    }
}