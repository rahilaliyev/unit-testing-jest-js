const { getDaysDifference } = require("./index");

describe("Two date differences:", () => {
  test("should return substact of days", () => {
    expect(getDaysDifference(new Date(2023, 8, 1), new Date(2023, 8, 10))).toBe(9);
    expect(getDaysDifference(new Date(2023, 8, 15), new Date(2023, 8, 20))).toEqual(5);
    expect(getDaysDifference(new Date(2023, 8, 13), new Date(2023, 8, 11))).toEqual(0);
  });

  test("should handle dates with different months and years", () => {
    expect(getDaysDifference(new Date(2023, 8, 1), new Date(2023, 9, 1))).toBe(30);
    expect(getDaysDifference(new Date(2022, 8, 15), new Date(2023, 8, 20))).toBe(370);
  });

  test("should handle dates with different months and years", () => {
    expect(getDaysDifference(new Date(2023, 8, 1), new Date(2023, 9, 1))).toBe(30);
    expect(getDaysDifference(new Date(2022, 8, 15), new Date(2023, 8, 20))).toBe(370);
  });

  test("should return 0 for same dates", () => {
    const date = new Date(2023, 8, 1);
    expect(getDaysDifference(date, date)).toBe(0);
  });

  test("should return 0 when b is before a", () => {
    expect(getDaysDifference(new Date(2023, 8, 1), new Date(2023, 7, 15))).toBe(0);
  });

  test("should throw an error for invalid dates", () => {
    expect(() => getDaysDifference("2023-08-01", new Date(2023, 8, 10))).toThrow(
      "Both parameters must be valid Date objects"
    );
    expect(() => getDaysDifference(new Date(2023, 8, 1), "2023-08-10")).toThrow(
      "Both parameters must be valid Date objects"
    );
    expect(() => getDaysDifference("salam", 12345)).toThrow("Both parameters must be valid Date objects");
  });
});
