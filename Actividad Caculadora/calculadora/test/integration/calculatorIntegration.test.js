import Calculator from '../../src/components/Calculator.js';
import calculatorService from '../../src/services/calculatorService.js';
import { performOperation } from '../../src/utils/mathOperations.js';

describe('Calculator Integration', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('full addition operation flow', () => {
    // Simula la entrada del usuario
    calculator.handleNumberInput('5');
    calculator.handleOperation('+');
    calculator.handleNumberInput('3');
    calculator.handleEquals();
    
    // Verifica el resultado
    expect(calculator.currentInput).toBe('8');
  });

  test('service and utils integration', () => {
    const result = calculatorService.calculate(5, 3, '+');
    expect(result).toBe(performOperation(5, 3, '+'));
  });

  test('division by zero shows error', () => {
    calculator.handleNumberInput('5');
    calculator.handleOperation('/');
    calculator.handleNumberInput('0');
    
    expect(() => calculator.handleEquals()).toThrow('División por cero');
  });
});