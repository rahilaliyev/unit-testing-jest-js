const sum = (a, b) => a + b;

const substract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => (b !== 0 ? a / b : "Error");

module.exports = { sum, substract, multiply, divide };
