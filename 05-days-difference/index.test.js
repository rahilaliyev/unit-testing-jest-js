const { getDaysDifference } = require("./index");

describe("Two date differences:", () => {
  test("should return substact of days", () => {
    expect(getDaysDifference(new Date(2023, 8, 1), new Date(2023, 8, 10))).toBe(9);
    expect(getDaysDifference(new Date(2023, 8, 15), new Date(2023, 8, 20))).toEqual(5);
    expect(getDaysDifference(new Date(2023, 8, 13), new Date(2023, 8, 11))).toEqual(0);
  });
});
