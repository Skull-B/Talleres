import Display from '../../../src/components/Display.js';

describe('Display', () => {
    let display;

    beforeEach(() => {
        display = new Display();
    });

    test('renders with default value 0', () => {
        const displayElement = display.render();
        expect(displayElement.textContent).toBe('0');
    });

    test('updates display value correctly', () => {
        display.render();
        display.update('123');
        expect(display.displayElement.textContent).toBe('123');
    });
});