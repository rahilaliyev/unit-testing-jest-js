const sum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("The types of parameters must be numbers");
  }
  return a + b;
};

const substract = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("The types of parameters must be numbers");
  }
  return a - b;
};

const multiply = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("The types of parameters must be numbers");
  }
  return a * b;
};

const divide = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("The types of parameters must be numbers");
  }
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
};

module.exports = { sum, substract, multiply, divide };
