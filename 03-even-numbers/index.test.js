const { evenNumbers } = require("./index");

describe("Even numbers:", () => {
  test("array should return even", () => {
    expect(evenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    expect(evenNumbers([7, 9, 12, 15, 18])).toEqual([12, 18]);
  });

  test("empty array should return empty array", () => {
    expect(evenNumbers([])).toEqual([]);
  });

  test("array with odd numbers should return empty array", () => {
    expect(evenNumbers([1, 3, 5, 7, 9])).toEqual([]);
  });

  test("array with strings should be filtered correctly", () => {
    expect(evenNumbers(["a", 2, "b", "c", 5, 6])).toEqual([2, 6]);
  });
});
