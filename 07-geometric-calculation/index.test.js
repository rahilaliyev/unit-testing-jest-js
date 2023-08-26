const { calculateTriangleArea } = require("./index");

describe("Calculating triangle area:", () => {
  test("should return result", () => {
    expect(calculateTriangleArea(3, 4, 5)).toBe(6);
    expect(calculateTriangleArea(6, 8, 10)).toEqual(24);
  });
});
