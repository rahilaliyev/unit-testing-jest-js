const { validateEmail } = require("./index");

describe("Validating email:", () => {
  test("should return true", () => {
    expect(validateEmail("example@example.com")).toBe(true);
    expect(validateEmail("rahil.eliyev@example.com")).toBe(true);
  });
});

describe("Validating email:", () => {
  test("should return true", () => {
    expect(validateEmail("invalid.email")).toEqual(false);
    expect(validateEmail(null)).toBe(false);
    expect(validateEmail("")).toBe(false);
    expect(validateEmail("rahil@aliyev")).toBe(false);
    expect(validateEmail(12345)).toBe(false);
    expect(validateEmail("!@#")).toBe(false);
  });
});
