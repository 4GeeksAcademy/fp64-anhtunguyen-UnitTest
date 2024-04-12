const { fibonacci } = require('./app.js');
test('expected 5 elements', () => {
    let fibonacciArray = fibonacci(5);
    expect(fibonacciArray.length).toBe(5);
});
