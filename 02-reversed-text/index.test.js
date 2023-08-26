const { reversedText } = require("./index");

describe("Reversed text:", () => {
  test("Text should return reversed", () => {
    expect(reversedText("Hello")).toBe("olleH");
    expect(reversedText("Vacation is cool!")).toEqual("!looc si noitacaV");
  });
});
