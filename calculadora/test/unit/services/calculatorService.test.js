import calculatorService from '../../../src/services/calculatorService.js';

describe('calculatorService', () => {
    test('calculates addition correctly', () => {
        expect(calculatorService.calculate(2, 3, '+')).toBe(5);
    });

    test('calculates division correctly', () => {
        expect(calculatorService.calculate(10, 2, '/')).toBe(5);
    });
});