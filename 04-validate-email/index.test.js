const { validateEmail } = require("./index");

describe("Validating email:", () => {
  test("should return true", () => {
    expect(validateEmail("example@example.com")).toBe(true);
    expect(validateEmail("invalid.email")).toEqual(false);
  });
});
