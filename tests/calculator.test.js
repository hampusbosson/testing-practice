const calculator = require('../code/calculator');

test('calculator add', () => {
    expect(calculator.add(3, 4)).toBe(7);
});

test('calculator subtract', () => {
    expect(calculator.subtract(8, 6)).toBe(2);
});

test('calculator divide', () => {
    expect(calculator.divide(25, 5)).toBe(5);
})

test('calculator multiply', () => {
    expect(calculator.multiply(6, 6)).toBe(36);
});

