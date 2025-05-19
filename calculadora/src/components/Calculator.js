import Display from './Display.js';
import calculatorService from '../services/calculatorService.js';

export default class Calculator {
    constructor() {
        this.display = new Display();
        this.calculatorService = calculatorService;
        this.currentInput = '0';
        this.previousInput = '';
        this.operation = null;
        this.resetNextInput = false;
    }

    render() {
        const calculator = document.createElement('div');
        calculator.className = 'calculator';

        calculator.appendChild(this.display.render(this.currentInput));

        const buttons = [
            '7', '8', '9', '/',
            '4', '5', '6', '*',
            '1', '2', '3', '-',
            '0', '.', '=', '+',
            'C'
        ];

        buttons.forEach(buttonText => {
            const button = document.createElement('button');
            button.textContent = buttonText;
            button.addEventListener('click', () => this.handleButtonClick(buttonText));
            calculator.appendChild(button);
        });

        return calculator;
    }

    handleButtonClick(buttonText) {
        if (!isNaN(buttonText) || buttonText === '.') {
            this.handleNumberInput(buttonText);
        } else if (['+', '-', '*', '/'].includes(buttonText)) {
            this.handleOperation(buttonText);
        } else if (buttonText === '=') {
            this.handleEquals();
        } else if (buttonText === 'C') {
            this.handleClear();
        }

        this.display.update(this.currentInput);
    }

    handleNumberInput(number) {
        if (this.currentInput === '0' || this.resetNextInput) {
            this.currentInput = number;
            this.resetNextInput = false;
        } else {
            this.currentInput += number;
        }
    }

    handleOperation(op) {
        if (this.operation !== null) this.handleEquals();
        this.previousInput = this.currentInput;
        this.operation = op;
        this.resetNextInput = true;
    }

    handleEquals() {
        if (this.operation === null || this.resetNextInput) return;

        this.currentInput = this.calculatorService.calculate(
            parseFloat(this.previousInput),
            parseFloat(this.currentInput),
            this.operation
        ).toString();

        this.operation = null;
        this.resetNextInput = true;
    }

    handleClear() {
        this.currentInput = '0';
        this.previousInput = '';
        this.operation = null;
        this.resetNextInput = false;
    }
}