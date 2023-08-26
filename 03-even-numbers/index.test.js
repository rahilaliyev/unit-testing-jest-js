const { evenNumbers } = require("./index");

describe("Even numbers:", () => {
  test("array should return even", () => {
    expect(evenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    expect(evenNumbers([7, 9, 12, 15, 18])).toEqual([12, 18]);
  });
});
