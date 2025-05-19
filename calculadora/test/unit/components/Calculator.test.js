import Calculator from '../../../src/components/Calculator.js';

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('initializes with currentInput as 0', () => {
        expect(calculator.currentInput).toBe('0');
    });

    test('handles number input correctly', () => {
        calculator.handleNumberInput('5');
        expect(calculator.currentInput).toBe('5');
    });

    test('handles operation input correctly', () => {
        calculator.handleNumberInput('5');
        calculator.handleOperation('+');
        calculator.handleNumberInput('3');
        calculator.handleEquals();
        expect(calculator.currentInput).toBe('8');
    });

    test('clears calculator correctly', () => {
        calculator.handleNumberInput('5');
        calculator.handleOperation('+');
        calculator.handleNumberInput('3');
        calculator.handleClear();
        expect(calculator.currentInput).toBe('0');
        expect(calculator.operation).toBeNull();
    });
});