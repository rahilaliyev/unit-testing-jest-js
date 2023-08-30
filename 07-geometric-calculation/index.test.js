const { calculateTriangleArea } = require("./index");

describe("Calculating triangle area:", () => {
  test("should return result", () => {
    expect(calculateTriangleArea(3, 4, 5)).toBe(6);
    expect(calculateTriangleArea(6, 8, 10)).toEqual(24);
  });
});

describe("Calculating triangle area:", () => {
  test("should throw an error for negative side lengths", () => {
    expect(() => calculateTriangleArea(-3, 4, 5)).toThrow("Side lengths must be positive");
    expect(() => calculateTriangleArea(6, -8, 10)).toThrow("Side lengths must be positive");
    expect(() => calculateTriangleArea(6, 8, -10)).toThrow("Side lengths must be positive");
  });
});

describe("Calculating triangle area:", () => {
  test("should throw an error for non number side lengths", () => {
    expect(() => calculateTriangleArea("a", "b", "c")).toThrow("Side variables must be number");
    expect(() => calculateTriangleArea(0, null, 6)).toThrow("Side variables must be number");
  });
});
