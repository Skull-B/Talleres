import Calculator from './components/Calculator.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    const calculator = new Calculator();
    app.appendChild(calculator.render());
});