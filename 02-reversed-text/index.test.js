const { reversedText } = require("./index");

describe("Reversed text:", () => {
  test("Text should return reversed", () => {
    expect(reversedText("Hello")).toBe("olleH");
    expect(reversedText("Vacation is cool!")).toEqual("!looc si noitacaV");
  });

  test("should throw an error for empty string", () => {
    expect(() => reversedText("")).toThrow("Text must not be empty");
  });

  test("Text with numbers and symbols should also be reversed", () => {
    expect(reversedText("12345")).toBe("54321");
    expect(reversedText("@#$%")).toBe("%$#@");
  });
});
