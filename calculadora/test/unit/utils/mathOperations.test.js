import { performOperation } from '../../../src/utils/mathOperations.js';

describe('mathOperations', () => {
  test('adds numbers correctly', () => {
    expect(performOperation(2, 3, '+')).toBe(5);
  });
  
  test('throws error on division by zero', () => {
    expect(() => performOperation(5, 0, '/')).toThrow('División por cero');
  });
});