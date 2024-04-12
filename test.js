const { fibonacci } = require('./app.js');
test('expected 5 elements', () => {
    let fibonacciArray = fibonacci(5);
    expect(fibonacciArray.length).toBe(5);
});

test('Last element for input 5 should be 3', () => {
    let fibonacciArray = fibonacci(5);
    expect(fibonacciArray[4]).toBe(3);
});

test('Expected 0 elements for negative input', () => {
    let fibonacciArray = fibonacci(-5);
    expect(fibonacciArray.length).toBe(0);
});
