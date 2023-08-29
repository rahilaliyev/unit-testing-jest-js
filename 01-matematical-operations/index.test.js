const { sum, substract, multiply, divide } = require("./index");

describe("Sum:", () => {
  test("should return correct addition", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(1, 3)).toEqual(4);
  });
});

describe("Sum:", () => {
  test("should return correct value, if numbers are floated", () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    expect(sum(1.5, 2.7)).toBeCloseTo(4.2);
  });
});

describe("Sum:", () => {
  test("should return correct value for negative numbers", () => {
    expect(sum(-1, -2)).toBe(-3);
    expect(sum(4, -9)).toEqual(-5);
  });
});

describe("Sum:", () => {
  test("should return same value when adding 0", () => {
    expect(sum(0, 10)).toBe(10);
    expect(sum(5, 0)).toEqual(5);
  });
});

describe("Sum:", () => {
  test("should throw an error for non-numeric values", () => {
    expect(() => sum(2, "3")).toThrow("The types of parameters must be numbers");
    expect(() => sum("hi", 5)).toThrow("The types of parameters must be numbers");
  });
});

describe("Minus:", () => {
  test("should return correct addition", () => {
    expect(substract(5, 4)).toBe(1);
    expect(substract(4, 0)).toEqual(4);
    expect(substract(1, 3)).toEqual(-2);
  });
});

describe("Minus:", () => {
  test("should return negative numbers", () => {
    expect(substract(-5, -2)).toBe(-3);
    expect(substract(-5, 15)).toBe(-20);
  });
});

describe("Minus:", () => {
  test("should return same value when substact 0", () => {
    expect(substract(10, 0)).toBe(10);
    expect(substract(5, 0)).toEqual(5);
  });
});

describe("Minus:", () => {
  test("should throw an error for non-numeric inputs", () => {
    expect(() => substract(5, "2")).toThrow("The types of parameters must be numbers");
    expect(() => substract("hello", 3)).toThrow("The types of parameters must be numbers");
  });
});

describe("Minus:", () => {
  test("should return correct value for decimal and integer numbers", () => {
    expect(substract(5.1, 2.6)).toBeCloseTo(2.5);
    expect(substract(5.5, 3.7)).toBeCloseTo(1.8);
  });
});

describe("Multiply:", () => {
  test("should return correct addition", () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(4, 0)).toEqual(0);
    expect(multiply(1, 3)).toEqual(3);
  });
});

describe("Multiply:", () => {
  test("should return negative values", () => {
    expect(multiply(-2, 5)).toBe(-10);
    expect(multiply(-3, 4)).toEqual(-12);
  });
});

describe("Multiply:", () => {
  test("should return 0, when multiplying with zero", () => {
    expect(multiply(10, 0)).toBe(0);
    expect(multiply(0, 2)).toEqual(0);
  });
});

describe("Multiply:", () => {
  test("should return 0, when multiplying with zero", () => {
    expect(multiply(10, 0)).toBe(0);
    expect(multiply(0, 2)).toEqual(0);
  });
});

describe("Multiply:", () => {
  test("should return correct value for decimal and integer values", () => {
    expect(multiply(2.5, 2)).toBe(5);
    expect(multiply(5.4, 5)).toEqual(27);
    expect(multiply(2.5, 2.5)).toBeCloseTo(6.25);
    expect(multiply(3.5, 3)).toBeCloseTo(10.5);
  });
});

describe("Divide:", () => {
  test("should return correct addition", () => {
    expect(divide(4, 2)).toBe(2);
    expect(divide(10, 1)).toEqual(10);
  });
});

describe("Divide:", () => {
  test("should return negative value", () => {
    expect(divide(-10, 2)).toBe(-5);
    expect(divide(6, -3)).toEqual(-2);
  });
});

describe("Divide:", () => {
  test("should return negative value", () => {
    expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
    expect(divide(0, 10)).toBe(0);
  });
});

describe("Divide:", () => {
  test("should return negative value", () => {
    expect(() => divide(5, "2")).toThrow("The types of parameters must be numbers");
    expect(() => divide("hello", 3)).toThrow("The types of parameters must be numbers");
  });
});

describe("Divide:", () => {
  test("should return correct value for decimal and integer values", () => {
    expect(divide(10, 3)).toBeCloseTo(3.333, 2);
    expect(divide(1.32, 1.1)).toBeCloseTo(1.2);
    expect(divide(7.5, 1.5)).toBe(5);
  });
});
