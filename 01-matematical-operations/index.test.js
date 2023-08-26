const { sum, substract, multiply, divide } = require("./index");

describe("Matematical Operations:", () => {
  test("Sum should return correct addition", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(1, 3)).toEqual(4);
  });

  test("Minus should return correct addition", () => {
    expect(substract(5, 4)).toBe(1);
    expect(substract(4, 0)).toEqual(4);
    expect(substract(1, 3)).toEqual(-2);
  });

  test("Multiply should return correct addition", () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(4, 0)).toEqual(0);
    expect(multiply(1, 3)).toEqual(3);
  });

  test("Divide should return correct addition", () => {
    expect(divide(4, 2)).toBe(2);
    expect(divide(0, 100)).toBe(0);
    expect(divide(4, 0)).toEqual("Error");
    expect(divide(10, 1)).toEqual(10);
  });
});
