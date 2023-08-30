const { convertCurrency } = require("./index");

describe("Converting currency:", () => {
  test("should return result", () => {
    expect(convertCurrency(100, 1.7)).toBe(170);
    expect(convertCurrency(50, 1.2)).toEqual(60);
  });
});

describe("Converting currency:", () => {
  test("should return correct result for string number", () => {
    expect(convertCurrency("100", 1.7)).toBe(170);
    expect(convertCurrency(50, "1.2")).toEqual(60);
  });
});

describe("Converting currency:", () => {
  test("should throw an errorv for zero amount and exchange rate", () => {
    expect(() => convertCurrency(0, 1.7)).toThrow("Variables must be positive");
    expect(() => convertCurrency(1.7, 0)).toThrow("Variables must be positive");
  });
});

describe("Converting currency:", () => {
  test("should throw an error for negative amount and exchange rate", () => {
    expect(() => convertCurrency(-3.5, 1.7)).toThrow("Variables must be positive");
    expect(() => convertCurrency(2, -1)).toThrow("Variables must be positive");
  });
});

describe("Converting currency:", () => {
  test("should throw an error for non numbers", () => {
    expect(() => convertCurrency("a", "salam")).toThrow("Variables must be number");
    expect(() => convertCurrency("hello", "world")).toThrow("Variables must be number");
  });
});
