const { convertCurrency } = require("./index");

describe("Converting currency:", () => {
  test("should return result", () => {
    expect(convertCurrency(100, 1.7)).toBe(170);
    expect(convertCurrency(50, 1.2)).toEqual(60);
  });
});
