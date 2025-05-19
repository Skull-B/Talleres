import { performOperation } from '../utils/mathOperations.js';

const calculatorService = {
    calculate: (num1, num2, operation) => {
        return performOperation(num1, num2, operation);
    }
};

export default calculatorService;